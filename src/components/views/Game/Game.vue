<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import config from '@/config';
import GameShare from './GameShare/GameShare.vue';

const route = useRoute();

const currentGameId = computed(() => route.params.game);
const currentGameConfig = computed(() => config.gameList.find((game) => game.id === +currentGameId.value));

const isDemoShow = ref(false);
const isGameShareShow = ref(false);
</script>

<template>
    <div class="game-wrap">
        <div class="banner">
            <img
                :src="$i18n.locale === 'zh-CN' ? currentGameConfig?.banner : currentGameConfig?.banner_en"
                alt=""
            />
            <div class="banner-btn-list">
                <img
                    class="demo"
                    src="@/assets/game_demo.png"
                    alt=""
                    @click="isDemoShow = true"
                />
                <img
                    class="share"
                    src="@/assets/game_share.png"
                    alt=""
                    @click="isGameShareShow = true"
                />
            </div>
        </div>

        <div class="intro">
            <div class="intro-title">
                <img
                    class="title-icon"
                    src="@/assets/game_intro_icon.png"
                    alt=""
                />
                <p class="title-text">
                    {{ $t('GAME_PAGE.INTRO_TITLE') }}
                </p>
            </div>
            <div class="left-border" />
            <div class="intro-content">
                <div class="heading">
                    {{ $t(`GAME.${currentGameId}.TITLE`) }}
                </div>
                <div class="content">
                    {{ $t(`GAME.${currentGameId}.CONTENT`) }}
                </div>
            </div>
        </div>

        <div class="feature">
            <div class="feature-title">
                <img
                    class="title-icon"
                    src="@/assets/game_feature_icon.png"
                    alt=""
                />
                <p class="title-text">
                    {{ $t('GAME_PAGE.FEATURE_TITLE') }}
                </p>
            </div>
            <div class="left-border" />
            <div class="feature-content">
                <div class="promote">
                    {{ $t(`GAME.${currentGameId}.PROMOTE1`) }}
                </div>
                <div class="promote">
                    {{ $t(`GAME.${currentGameId}.PROMOTE2`) }}
                </div>
            </div>
        </div>

        <div
            class="iframe-warp"
            v-if="isDemoShow"
            @click="isDemoShow = !isDemoShow"
        >
            <iframe
                :src="`https://bb-guest.com:5569/game/game.php?GameType=${currentGameId}&lang=${$i18n.locale}`"
                width="70%"
                height="70%"
                frameborder="0"
            />
            <img
                class="close"
                src="@/assets/contact_close.png"
                alt=""
            />
        </div>

        <GameShare
            v-model="isGameShareShow"
            v-if="isGameShareShow"
        />
    </div>
</template>

<style lang="scss">
@import "./Game";
</style>
