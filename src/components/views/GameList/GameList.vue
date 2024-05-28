<script setup lang="ts">
import config from '@/config';
</script>

<template>
    <div class="game-list-wrap">
        <p class="title">{{ $t('GAME_LIST.TITLE') }}</p>
        <div class="game-container">
            <router-link
                v-for="game in config.gameList"
                :key="game.id"
                class="game-item"
                :to="`/${$i18n.locale}/${game.id}`"
            >
                <img
                    :src="$i18n.locale === 'cn' ? game.thumbnail_cn : game.thumbnail_en"
                    alt=""
                />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './GameList';
</style>
