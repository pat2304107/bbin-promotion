<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import config from '@/config';
import enterCh from '@/assets/enter_ch.png';
import enterEn from '@/assets/enter_en.png';

const gameIcon = ref<HTMLElement[]>();
const enterBlock = ref<HTMLElement>();

onMounted(() => {
    if (!gameIcon.value || !enterBlock.value) return;
    gameIcon.value.forEach((game, index) => {
        gsap.fromTo(game, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.5 + 0.2 * index });
    });
});
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
                ref="gameIcon"
            />
        </div>
        <div
            class="enter-block"
            ref="enterBlock"
        >
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
                    :src="$i18n.locale === 'zh-CN' ? enterCh : enterEn"
                    alt="enter"
                />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import "./Index";
</style>
