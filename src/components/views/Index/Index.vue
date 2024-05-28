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
    gsap.timeline()
        .addLabel('start')
        .fromTo(gameIcon.value, { opacity: 0, y: 100, x: -40 }, { opacity: 1, y: 0, x: 0, stagger: 0.2 }, 'start+=0.5')
        .add(() => {
            if (!gameIcon.value) return;
            gameIcon.value.forEach((icon, index) => {
                gsap.to(icon, {
                    y: 10,
                    x: -4,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    delay: (index + 1) * 0.2
                });
            });
        }, 'start+=0.7');
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
                    :src="$i18n.locale === 'cn' ? enterCh : enterEn"
                    alt="enter"
                />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import "./Index";
</style>
