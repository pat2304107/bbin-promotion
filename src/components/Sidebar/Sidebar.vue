<script setup lang="ts">
import config from '@/config';

const { gameList } = config;
</script>

<template>
    <div class="sidebar-wrap">
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
