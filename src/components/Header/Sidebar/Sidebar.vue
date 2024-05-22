<script setup lang="ts">
import config from '@/config';

const sideBarIsShow = defineModel<boolean>();

const { gameList } = config;

const clickGameHandler = () => {
    sideBarIsShow.value = !sideBarIsShow.value;
};
</script>

<template>
    <div
        class="sidebar-wrap"
        :class="{'open':sideBarIsShow}"
    >
        <div class="sidebar-scaler">
            <div class="sidebar-block sidebar-left">
                <div class="title">
                    {{ $t('HEADER.SIDEBAR.GAME_TITLE') }}
                </div>
                <div
                    v-for="game in gameList"
                    :key="game.id"
                    class="game-link"
                >
                    <router-link
                        :to="`/${$i18n.locale}/${game.id}`"
                        @click="clickGameHandler"
                    >
                        {{ $t(`GAME.${game.id}.NAME`) }}
                    </router-link>
                </div>
            </div>
            <div class="sidebar-block sidebar-right">
                <div class="title">
                    {{ $t('HEADER.SIDEBAR.BBIN_INFO') }}
                </div>
                <div class="bbin-link">
                    <a href="https://www.bbin-news.com/?utm_source=promo">
                        {{ $t('HEADER.SIDEBAR.BB_NEWS') }}
                    </a>
                </div>
                <div class="bbin-link">
                    <a href="https://bbin-casino.com/?utm_source=promo">
                        {{ $t('HEADER.SIDEBAR.BB_CASINO') }}
                    </a>
                </div>
                <div
                    class="contact-btn"
                >
                    <router-link
                        :to="`/${$i18n.locale}/contact`"
                        @click="clickGameHandler"
                    >
                        {{ $t('HEADER.SIDEBAR.CONTACT') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './Sidebar';
</style>
