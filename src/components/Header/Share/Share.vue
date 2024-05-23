<script setup lang="ts">
const sidebarIsShow = defineModel<boolean>();

const url = 'www.bbin-news.com/bbinpromo';

const copy = () => {
    navigator.clipboard.writeText(url);
};
</script>

<template>
    <div
        class="share-wrap"
        :class="{'open':sidebarIsShow}"
    >
        <div class="share-scaler">
            <div class="share-container">
                <img
                    src="@/assets/qrcode.png"
                    alt=""
                    class="qrcode"
                />

                <div class="url-copy-container">
                    www.bbin-news.com/bbinpromo
                    <img
                        class="copy-icon"
                        src="@/assets/copy_icon.png"
                        alt=""
                        @click="copy"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './Share';
</style>
