<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import publishConfig from '../../../../publish.config';

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
        url: `${publishConfig.domain}/api/contact-us`,
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
        <div class="name">
            <p>姓名</p>
            <input
                type="text"
                v-model="formData.name"
            />
        </div>
        <div class="email">
            <p>電子信箱</p>
            <input
                type="email"
                v-model="formData.email"
            />
        </div>
        <div class="telegram">
            <p>Telegram</p>
            <input
                type="text"
                v-model="formData.im.Telegram"
            />
        </div>
        <div class="message">
            <input
                type="text"
                v-model="formData.message"
            />
        </div>

        <button @click="sendContact">
            提交
        </button>

        <div>
            {{ successMessage }}
            {{ errorMessage }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
