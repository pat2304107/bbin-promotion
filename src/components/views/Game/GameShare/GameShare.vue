<script setup lang="ts">
const url = 'www.bbin-news.com/bbinpromo';

const isGameShareShow = defineModel<boolean>();

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
            <div class="share-scaler">
                <div class="share-container">
                    <img
                        src="@/assets/qrcode.png"
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
