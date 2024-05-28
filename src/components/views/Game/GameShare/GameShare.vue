<script setup lang="ts">
import { useI18n } from 'vue-i18n';

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

const copy = () => {
    navigator.clipboard.writeText(url);
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
                    alt=""
                />
                <img
                    :src="$i18n.locale === 'cn' ? currentGameConfig?.qrcode_cn : currentGameConfig?.qrcode_en"
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
            <img
                class="close"
                src="@/assets/contact_close.png"
                alt=""
                @click="isGameShareShow = false"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './GameShare';
</style>
