<script setup lang="ts">
import config from '@/config';
</script>

<template>
    <div class="home-wrap">
        <div
            class="game-block"
        >
            <img
                v-for="(game, idx) in config.gameList"
                :key="game.id"
                :src="game.index"
                alt=""
                class="game"
                :class="`game-${idx+1}`"
            />
        </div>
        <div class="enter-block">
            <img
                class="title"
                src="@/assets/index_title.png"
                alt="title"
            />
            <router-link
                :to="`/${$i18n.locale}/GameList`"
                class="enter"
            >
                <img
                    src="@/assets/enter_ch.png"
                    alt="enter"
                />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import "./Index";
</style>
