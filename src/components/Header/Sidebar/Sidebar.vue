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
        :style="`height: ${sideBarIsShow? '100vh':'0'}`"
    >
        <div>
            {{ $t('HEADER.SIDEBAR.GAME_TITLE') }}
        </div>
        <div>
            <div
                v-for="game in gameList"
                :key="game.id"
            >
                <router-link
                    :to="`/${$i18n.locale}/${game.id}`"
                    @click="clickGameHandler"
                >
                    {{ $t(`GAME.${game.id}.NAME`) }}
                </router-link>
            </div>
        </div>
        <div>
            {{ $t('HEADER.SIDEBAR.BBIN_INFO') }}
        </div>
        <div>
            <a href="https://www.bbin-news.com/?utm_source=promo">
                {{ $t('HEADER.SIDEBAR.BB_NEWS') }}
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './Sidebar';
</style>
