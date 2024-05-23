<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import config from '@/config';

const route = useRoute();

const currentGameId = computed(() => route.params.game);
const currentGameConfig = computed(() => config.gameList.find((game) => game.id === +currentGameId.value));

const isDemoShow = ref(false);
</script>

<template>
    <div class="game-wrap">
        <div class="banner">
            <img
                :src="$i18n.locale === 'zh-CN' ? currentGameConfig?.banner : currentGameConfig?.banner_en"
                alt=""
            />
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

        <!-- <button
            @click="isDemoShow = !isDemoShow"
        >
            demo
        </button> -->

        <!-- <div
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
        </div> -->
    </div>
</template>

<style lang="scss">
@import "./Game";
</style>
