<script setup lang="ts">
import { ref } from 'vue';
import { useLanguage } from '@/composables/setLocalePath';
import Sidebar from './Sidebar/Sidebar.vue';

const { setLocalePath } = useLanguage();

const sideBarIsShow = ref(false);

const clickHamburgerHandler = () => {
    sideBarIsShow.value = !sideBarIsShow.value;
};
</script>

<template>
    <div class="header-wrap">
        <router-link
            class="logo"
            :to="`/${$i18n.locale}/`"
        >
            <img
                src="@/assets/logo.png"
                alt="bbin logo"
            />
        </router-link>

        <div class="header-right">
            <div class="lang-selector">
                <img
                    src="@/assets/language_icon.png"
                    alt="language icon"
                    class="lang-icon"
                />
                <div
                    class="lang"
                    @click="setLocalePath('zh-CN')"
                    :class="{'active': $i18n.locale === 'zh-CN'}"
                >
                    中文
                </div>
                <div>|</div>
                <div
                    class="lang"
                    @click="setLocalePath('en-US')"
                    :class="{'active': $i18n.locale === 'en-US'}"
                >
                    English
                </div>
            </div>

            <div class="share">
                <img
                    src="@/assets/share_icon.png"
                    alt="share icon"
                    class="share-icon"
                />
                <p>
                    {{ $t('HEADER.SHARE') }}
                </p>
            </div>

            <div
                class="hamburger-menu"
                @click="clickHamburgerHandler"
                :class="{'active':sideBarIsShow}"
            >
                <div class="ham ham-1" />
                <div class="ham ham-2" />
                <div class="ham ham-3" />
            </div>
        </div>

        <Sidebar v-model="sideBarIsShow" />
        <div class="border-bottom" />
    </div>
</template>

<style lang="scss">
@import "./Header";
</style>
