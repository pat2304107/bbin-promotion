<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import config from '@/config';
import { useGtmSender } from '@/composables/useGtmSender';

const iconAnimation = ref<HTMLElement[]>();

onMounted(() => {
    if (!iconAnimation.value) return;
    gsap.timeline()
        .addLabel('start')
        .fromTo(iconAnimation.value, { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.1 }, 'start+=0.5');
});
</script>

<template>
    <div class="game-list-wrap">
        <p class="title">{{ $t('GAME_LIST.TITLE') }}</p>
        <div class="game-container">
            <router-link
                v-for="game in config.gameList"
                :key="game.id"
                class="game-item"
                :class="`click-${game.id}`"
                :to="`/${$i18n.locale}/${game.id}`"
                @click="useGtmSender({ event: `展覽_首頁_入口_點擊_${game.id}_${$i18n.locale}` })"
            >
                <img
                    :src="$i18n.locale === 'cn' ? game.entry_cn : game.entry_en"
                    alt="entry image"
                    ref="iconAnimation"
                />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './GameList';
</style>
