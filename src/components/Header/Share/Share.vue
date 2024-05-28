<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import QrCodeCn from '@/assets/Index/index_qrcode_cn.png';
import QrCodeEn from '@/assets/Index/index_qrcode_en.png';

const i18n = useI18n();
const shareIsShow = defineModel<boolean>();

const url = i18n.t('INDEX.URL');

const copy = () => {
    navigator.clipboard.writeText(url);
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
                    alt=""
                    class="qrcode"
                />

                <div class="url-copy-container">
                    {{ url }}
                    <img
                        class="copy-icon"
                        src="@/assets/copy_icon.png"
                        alt=""
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
