<script setup lang="ts">
import { ref } from 'vue';
import { useLanguage } from '@/composables/setLocalePath';
import Sidebar from './Sidebar/Sidebar.vue';
import Share from './Share/Share.vue';

const { setLocalePath } = useLanguage();

const sidebarIsShow = ref(false);
const shareIsShow = ref(false);
const languageIsOpen = ref(false);

const toggleSidebar = () => {
    shareIsShow.value = false;
    sidebarIsShow.value = !sidebarIsShow.value;
};

const toggleShare = () => {
    sidebarIsShow.value = false;
    shareIsShow.value = !shareIsShow.value;
};

const toggleLanguage = () => {
    languageIsOpen.value = !languageIsOpen.value;
};
const clickLanguageHandler = (lang: 'cn' | 'en') => {
    toggleLanguage();
    setLocalePath(lang);
};
</script>

<template>
    <div class="header-wrap">
        <router-link
            class="logo"
            :to="`/${$i18n.locale}/`"
            @click="sidebarIsShow = false"
        >
            <img
                src="@/assets/logo.png"
                alt="bbin logo"
            />
        </router-link>

        <div class="header-right">
            <div
                class="lang-selector"
                :class="{'open': languageIsOpen}"
            >
                <img
                    src="@/assets/language_icon.png"
                    alt="language icon"
                    class="lang-icon"
                />

                <div
                    v-if="!languageIsOpen"
                    @click="toggleLanguage"
                    class="lang-title"
                >
                    {{ $t('HEADER.LANGUAGE_SELECTOR') }}
                </div>

                <div
                    v-if="languageIsOpen"
                    class="lang-selection"
                >
                    <div
                        class="lang"
                        @click="clickLanguageHandler('cn')"
                        :class="{'active': $i18n.locale === 'cn'}"
                    >
                        中文
                    </div>
                    <div>
                        |
                    </div>
                    <div
                        class="lang"
                        @click="clickLanguageHandler('en')"
                        :class="{'active': $i18n.locale === 'en'}"
                    >
                        English
                    </div>
                </div>
            </div>

            <div
                class="share"
                @click="toggleShare"
            >
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
                @click="toggleSidebar"
                :class="{'active':sidebarIsShow}"
            >
                <div class="ham ham-1" />
                <div class="ham ham-2" />
                <div class="ham ham-3" />
            </div>
        </div>

        <div class="border-bottom" />
    </div>
    <Sidebar v-model="sidebarIsShow" />
    <Share v-model="shareIsShow" />
</template>

<style lang="scss">
@import "./Header";
</style>
