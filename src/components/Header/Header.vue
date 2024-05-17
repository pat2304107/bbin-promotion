<script setup lang="ts">
import { useLanguage } from '@/composables/setLocalePath';
import Sidebar from './Sidebar/Sidebar.vue';

const { setLocalePath } = useLanguage();

const sideBarIsShow = defineModel<boolean>();

const clickHamburgerHandler = () => {
    sideBarIsShow.value = !sideBarIsShow.value;
};
</script>

<template>
    <div class="header-wrap">
        Header
        <div
            @click="setLocalePath('zh-CN')"
            :style="`color:${$i18n.locale === 'zh-CN'?'red':'black'}`"
        >
            中文
        </div>
        <div
            @click="setLocalePath('en-US')"
            :style="`color:${$i18n.locale === 'en-US'?'red':'black'}`"
        >
            英文
        </div>

        <div @click="clickHamburgerHandler">ham</div>

        <Sidebar v-model="sideBarIsShow" />
    </div>
</template>

<style lang="scss">
@import "./Header";
</style>
