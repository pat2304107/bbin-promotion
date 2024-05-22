<script setup lang="ts">
import config from '@/config';
</script>

<template>
    <div class="game-list-wrap">
        <p class="title">GAME MENU</p>
        <div class="game-container">
            <router-link
                v-for="game in config.gameList"
                :key="game.id"
                class="game-item"
                :to="`/${$i18n.locale}/${game.id}`"
            >
                <img
                    :src="game.thumbnail"
                    alt=""
                />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './GameList';
</style>
