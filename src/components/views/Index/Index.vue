<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';
import config from '@/config';
import enterCh from '@/assets/enter_ch.png';
import enterEn from '@/assets/enter_en.png';
import useGtmSender from '@/composables/useGtmSender';

const { locale } = useI18n();
const gameIcon = ref<HTMLElement[]>();
const enterBlock = ref<HTMLElement>();
const iconAnimation = ref<HTMLElement[]>();

const leave = () => {
    if (!gameIcon.value || !iconAnimation.value) return;
    useGtmSender({ event: `展覽_首頁_入口_點擊_進入_${locale.value}` });
    iconAnimation.value.forEach((icon, index) => {
        setTimeout(() => {
            gsap.to(icon, {
                x: 40,
                y: -100,
                duration: 0.5,
                ease: 'power1.inOut'
            });
        }, index * 50);
    });
};

onMounted(() => {
    if (!gameIcon.value || !enterBlock.value) return;
    iconAnimation.value = [gameIcon.value[3], gameIcon.value[0], gameIcon.value[4], gameIcon.value[1], gameIcon.value[2]];
    gsap.timeline()
        .addLabel('start')
        .fromTo(iconAnimation.value, { opacity: 0, y: 100, x: -40 }, { opacity: 1, y: 0, x: 0, stagger: 0.15 }, 'start+=0.5')
        .add(() => {
            if (!iconAnimation.value) return;
            iconAnimation.value.forEach((icon, index) => {
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
                alt="game icon"
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
                @click="leave"
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
