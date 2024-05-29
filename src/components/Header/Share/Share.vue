<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import QrCodeCn from '@/assets/Index/index_qrcode_cn.png';
import QrCodeEn from '@/assets/Index/index_qrcode_en.png';
import copyIcon from '@/assets/copy_icon.png';
import successIcon from '@/assets/copy_success.png';

const i18n = useI18n();
const shareIsShow = defineModel<boolean>();

const url = i18n.t('INDEX.URL');

const successState = ref(false);
const successTimer = ref();

const copy = () => {
    navigator.clipboard.writeText(url);
    successState.value = true;
    clearTimeout(successTimer.value);
    successTimer.value = setTimeout(() => {
        successState.value = false;
    }, 1000);
};
</script>

<template>
    <div
        class="share-wrap"
        :class="{'open':shareIsShow}"
    >
        <div class="share-scaler">
            <div class="share-container">
                <img
                    :src="$i18n.locale === 'cn' ? QrCodeCn : QrCodeEn"
                    alt="home page qrcode"
                    class="qrcode"
                />

                <div class="url-copy-container">
                    {{ url }}
                    <img
                        class="copy-icon"
                        :src="successState ? successIcon : copyIcon"
                        alt="copy icon"
                        @click="copy"
                    />
                </div>
            </div>
        </div>
        <div
            v-show="shareIsShow"
            class="mask"
            @click="()=>shareIsShow = false"
        />
    </div>
</template>

<style scoped lang="scss">
@import './Share';
</style>
