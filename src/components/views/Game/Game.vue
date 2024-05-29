<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import config from '@/config';
import gameDemoCn from '@/assets/Game/game_demo_cn.png';
import gameDemoEn from '@/assets/Game/game_demo_en.png';
import GameShare from './GameShare/GameShare.vue';

const route = useRoute();

const currentGameId = computed(() => route.params.game);
const currentGameConfig = ref(config.gameList.find((game) => game.id === +currentGameId.value));

const isDemoShow = ref(false);
const isGameShareShow = ref(false);
</script>

<template>
    <div class="game-wrap">
        <div class="banner">
            <img
                :src="$i18n.locale === 'cn' ? currentGameConfig?.banner : currentGameConfig?.banner_en"
                alt="game banner"
            />
            <div class="banner-btn-list">
                <img
                    class="demo"
                    :src="$i18n.locale === 'cn' ? gameDemoCn : gameDemoEn"
                    alt="demo button"
                    @click="isDemoShow = true"
                />
                <img
                    class="share"
                    src="@/assets/Game/game_share.png"
                    alt="share button"
                    @click="isGameShareShow = true"
                />
            </div>
        </div>

        <div class="intro">
            <div class="intro-title">
                <img
                    class="title-icon"
                    src="@/assets/Game/game_intro_icon.png"
                    alt="title icon"
                />
                <p
                    class="title-text"
                    v-html="$t('GAME_PAGE.INTRO_TITLE')"
                />
            </div>
            <div class="left-border" />
            <div class="intro-content">
                <div
                    class="heading"
                    v-html="$t(`GAME.${currentGameId}.TITLE`)"
                />
                <div
                    class="content"
                    v-html="$t(`GAME.${currentGameId}.CONTENT`)"
                />
            </div>
        </div>

        <div class="feature">
            <div class="feature-title">
                <img
                    class="title-icon"
                    src="@/assets/Game/game_feature_icon.png"
                    alt="title icon"
                />
                <p class="title-text">
                    {{ $t('GAME_PAGE.FEATURE_TITLE') }}
                </p>
            </div>
            <div class="left-border" />
            <div class="feature-content">
                <div class="promote promote-1">
                    {{ $t(`GAME.${currentGameId}.PROMOTE1`) }}
                </div>
                <img
                    :src="$i18n.locale === 'cn' ? currentGameConfig?.gif_cn_1 : currentGameConfig?.gif_en_1"
                    alt="promote gif 1"
                />
                <div class="promote promote-2">
                    {{ $t(`GAME.${currentGameId}.PROMOTE2`) }}
                </div>
                <img
                    :src="$i18n.locale === 'cn' ? currentGameConfig?.gif_cn_2 : currentGameConfig?.gif_en_2"
                    alt="promote gif 2"
                />
            </div>
        </div>

        <transition
            name="iframe-fade"
            mode="out-in"
        >
            <div
                class="iframe-warp"
                v-if="isDemoShow"
                @click="isDemoShow = !isDemoShow"
            >
                <iframe
                    :src="`https://bb-guest.com:5569/game/game.php?GameType=${currentGameId}&lang=${$i18n.locale}`"
                    frameborder="0"
                />
                <img
                    class="close"
                    src="@/assets/contact_close.png"
                    alt="close"
                />
            </div>
        </transition>

        <transition
            name="share-fade"
            mode="out-in"
        >
            <GameShare
                :currentGameConfig="currentGameConfig"
                v-model="isGameShareShow"
                v-if="isGameShareShow"
            />
        </transition>
    </div>
</template>

<style lang="scss">
@import "./Game";

.iframe-fade-enter-active,
.iframe-fade-leave-active,
.share-fade-enter-active,
.share-fade-leave-active {
    transition: opacity 0.5s ease;
}

.iframe-fade-enter-from,
.iframe-fade-leave-to,
.share-fade-enter-from,
.share-fade-leave-to {
    opacity: 0;
}
</style>
