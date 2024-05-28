<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { contactConfig } from '@/config';
import publishConfig from '../../../publish.config';

const { locale } = useI18n();

const formData = ref({
    name: '',
    email: '',
    message: '',
    newsletter: false,
    im: {
        Telegram: ''
    },
    locale: locale.value
});

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
        const response: AxiosResponse = await axios(config);
        successMessage.value = response.data;
    } catch (error) {
        console.error('Request error:', error);
        errorMessage.value = `Request error: ${error}`;
    }

    formData.value = {
        name: '',
        email: '',
        message: '',
        newsletter: false,
        im: {
            Telegram: ''
        },
        locale: locale.value
    };
};
</script>

<template>
    <div class="contact-wrap">
        <img
            class="letter"
            src="@/assets/contact_letter.png"
            alt=""
        />
        <img
            class="close"
            src="@/assets/contact_close.png"
            alt=""
            @click="contactConfig = false"
        />
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
            />
        </div>
        <div
            class="warning"
            :class="{'show':!isNamePass}"
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
            />
        </div>
        <div
            class="warning"
            :class="{'show':!isMessagePass}"
        >
            {{ $t('HEADER.SIDEBAR.CONTACT_FORM.WARNING') }}
        </div>

        <button
            class="send-btn"
            @click="sendContact"
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
