<script setup lang="ts">
const shareIsShow = defineModel<boolean>();

const url = 'www.bbin-news.com/bbinpromo';

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
