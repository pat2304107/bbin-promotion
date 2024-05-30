<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { contactConfig } from '@/config';
import useGtmSender from '@/composables/useGtmSender';
import publishConfig from '../../../publish.config';

const { locale } = useI18n();

const formData = ref({
    name: '',
    phone: '',
    email: '',
    message: '',
    newsletter: false,
    im: {
        Telegram: ''
    },
    locale: locale.value
});

const form = ref<HTMLElement>();
const send = ref<HTMLElement>();
const letter = ref<HTMLElement>();
const contactWrap = ref<HTMLElement>();
const successText = ref<HTMLElement>();

const successMessage = ref();
const errorMessage = ref();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isNamePass = ref(true);
const isEmailValid = ref(true);
const isEmailPass = ref(true);
const isMessagePass = ref(true);
const isTelegramPass = ref(true);
const isSendContentPass = ref(false);

const checkSendContent = () => {
    if (formData.value.name && formData.value.email && emailPattern.test(formData.value.email) && formData.value.message && formData.value.im.Telegram) {
        isSendContentPass.value = true;
    } else {
        isSendContentPass.value = false;
    }
};

const checkName = () => {
    isNamePass.value = !!formData.value.name;
    checkSendContent();
};
const checkEmail = () => {
    isEmailValid.value = !formData.value.email || emailPattern.test(formData.value.email);
    isEmailPass.value = !!formData.value.email;

    checkSendContent();
};
const checkMessage = () => {
    isMessagePass.value = !!formData.value.message;
    checkSendContent();
};
const checkTelegram = () => {
    isTelegramPass.value = !!formData.value.im.Telegram;
    checkSendContent();
};

const sendContact = async () => {
    if (!isSendContentPass.value) {
        return;
    }
    const config: AxiosRequestConfig = {
        method: 'post',
        url: `${
            publishConfig.branch === 'main'
                ? window.location.origin
                : publishConfig.domain
        }/api/contact-us`,
        data: formData.value
    };

    try {
        useGtmSender({ event: `展覽_聯絡我們__點擊_提交_${locale.value}` });
        const response: AxiosResponse = await axios(config);
        successMessage.value = response.data;

        if (!form.value || !contactWrap.value || !successText.value || !send.value || !letter.value) return;
        gsap.timeline()
            .addLabel('start')
            .to(send.value, { opacity: 0, duration: 0.2 }, 'start+=0')
            .to(form.value, { opacity: 0, duration: 0.2 }, 'start+=0')
            .to(contactWrap.value, { height: 200, duration: 0.5 }, 'start+=0.2')
            .to(successText.value, { display: 'block', opacity: 1, duration: 0.2 }, 'start+=0.5')
            .add(() => {
                if (!letter.value) return;
                gsap.to(letter.value, {
                    rotate: 20,
                    duration: 0.1,
                    repeat: 3,
                    yoyo: true,
                    ease: 'power1.inOut'
                });
            }, 'start+=0.5')
            .to(letter.value, { y: -300, duration: 0.5 }, 'start+=1.2')
            .to(contactWrap.value, { opacity: 0, duration: 0.2 }, 'start+=1.25')
            .call(() => {
                contactConfig.value = false;
            }, [], 'start+=1.5');
    } catch (error) {
        console.error('Request error:', error);
        errorMessage.value = `Request error: ${error}`;
    }
};
</script>

<template>
    <div
        class="contact-wrap"
        ref="contactWrap"
    >
        <img
            class="letter"
            src="@/assets/contact_letter.png"
            alt="letter"
            ref="letter"
        />
        <img
            class="close"
            src="@/assets/contact_close.png"
            alt="close"
            @click="contactConfig = false"
        />

        <div
            class="success-text"
            ref="successText"
        >
            {{ $t('HEADER.SIDEBAR.CONTACT_FORM.SUCCESS_TEXT') }}
        </div>

        <div
            class="form"
            ref="form"
        >
            <div
                class="title"
                v-html="$t('HEADER.SIDEBAR.CONTACT_FORM.TITLE')"
            />
            <div class="input-container name">
                <input
                    type="text"
                    v-model="formData.name"
                    :placeholder="$t('HEADER.SIDEBAR.CONTACT_FORM.NAME')"
                    @focus="isNamePass=true"
                    @blur="checkName"
                    @input="checkName"
                />
            </div>
            <div
                class="warning"
                :class="{'show':!isNamePass}"
            >
                {{ $t('HEADER.SIDEBAR.CONTACT_FORM.WARNING') }}
            </div>
            <div class="input-container phone">
                <input
                    type="text"
                    v-model="formData.phone"
                    :placeholder="$t('HEADER.SIDEBAR.CONTACT_FORM.PHONE')"
                />
            </div>
            <div
                class="warning"
            >
                {{ $t('HEADER.SIDEBAR.CONTACT_FORM.WARNING') }}
            </div>
            <div class="input-container email">
                <input
                    type="email"
                    v-model="formData.email"
                    :placeholder="$t('HEADER.SIDEBAR.CONTACT_FORM.EMAIL')"
                    @focus="isEmailPass=true"
                    @blur="checkEmail"
                    @input="checkEmail"
                />
            </div>
            <div
                class="warning"
                :class="{'show':!isEmailPass || !isEmailValid}"
            >
                {{ !isEmailPass ? $t('HEADER.SIDEBAR.CONTACT_FORM.WARNING') : $t('HEADER.SIDEBAR.CONTACT_FORM.EMAIL_WARNING') }}
            </div>
            <div class="input-container telegram">
                <input
                    type="text"
                    v-model="formData.im.Telegram"
                    :placeholder="$t('HEADER.SIDEBAR.CONTACT_FORM.TELEGRAM')"
                    @focus="isTelegramPass=true"
                    @blur="checkTelegram"
                    @input="checkTelegram"
                />
            </div>
            <div
                class="warning"
                :class="{'show':!isTelegramPass}"
            >
                {{ $t('HEADER.SIDEBAR.CONTACT_FORM.WARNING') }}
            </div>
            <div class="input-container message">
                <textarea
                    id="comments"
                    name="comments"
                    rows="4"
                    cols="50"
                    :placeholder="$t('HEADER.SIDEBAR.CONTACT_FORM.MESSAGE')"
                    v-model="formData.message"
                    @focus="isMessagePass=true"
                    @blur="checkMessage"
                    @input="checkMessage"
                />
            </div>
            <div
                class="warning"
                :class="{'show':!isMessagePass}"
            >
                {{ $t('HEADER.SIDEBAR.CONTACT_FORM.WARNING') }}
            </div>
        </div>

        <button
            class="send-btn"
            @click="sendContact"
            :class="{ 'pass' : isSendContentPass}"
            ref="send"
        >
            {{ $t('HEADER.SIDEBAR.CONTACT_FORM.SEND') }}
        </button>
    </div>
    <div
        class="mask"
        @click="contactConfig = false"
    />
</template>

<style lang="scss" scoped>
@import './Contact';
</style>
