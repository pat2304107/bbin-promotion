<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import copyIcon from '@/assets/copy_icon.png';
import successIcon from '@/assets/copy_success.png';

const i18n = useI18n();
const props = defineProps({
    currentGameConfig: {
        type: Object,
        default: undefined
    }
});
const isGameShareShow = defineModel<boolean>();
const { currentGameConfig } = props;

const url = i18n.t(`GAME.${currentGameConfig?.id}.URL`);

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
        class="game-share-wrap"
        @click="isGameShareShow = false"
    >
        <div
            class="game-share-container"
            @click.stop
        >
            <div class="share-container">
                <img
                    class="logo"
                    :src="$i18n.locale === 'cn' ? currentGameConfig?.logo_cn : currentGameConfig?.logo_en"
                    alt="logo"
                />
                <img
                    :src="$i18n.locale === 'cn' ? currentGameConfig?.qrcode_cn : currentGameConfig?.qrcode_en"
                    alt="qrcode"
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
            <img
                class="close"
                src="@/assets/contact_close.png"
                alt="close"
                @click="isGameShareShow = false"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './GameShare';
</style>
