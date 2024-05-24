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

const sendContact = async () => {
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
        console.log(response.data);
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
        <div class="title">
            若您有合作需求，请填写下方表格<br />
            我们将派专人尽快与您联系
        </div>
        <div class="input-container name">
            <input
                type="text"
                v-model="formData.name"
                placeholder="姓名"
            />
        </div>
        <div class="input-container email">
            <input
                type="email"
                v-model="formData.email"
                placeholder="电子邮箱"
            />
        </div>
        <div class="input-container telegram">
            <input
                type="text"
                v-model="formData.im.Telegram"
                placeholder="Telegram"
            />
        </div>
        <div class="input-container message">
            <textarea
                id="comments"
                name="comments"
                rows="4"
                cols="50"
                placeholder="请填写您的合作需求..."
                v-model="formData.message"
            />
        </div>

        <button
            class="send-btn"
            @click="sendContact"
        >
            提交
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
