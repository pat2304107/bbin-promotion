<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import config from '@/config';
import gameDemoCn from '@/assets/Game/game_demo_cn.png';
import gameDemoEn from '@/assets/Game/game_demo_en.png';
import useGtmSender from '@/composables/useGtmSender';
import GameShare from './GameShare/GameShare.vue';

const route = useRoute();
const { locale } = useI18n();

const currentGameId = computed(() => route.params.game);
const currentGameConfig = ref(config.gameList.find((game) => game.id === +currentGameId.value));

const isDemoShow = ref(false);
const isGameShareShow = ref(false);
const gameWrap = ref<HTMLElement>();

const clickDemoHandler = () => {
    useGtmSender({ event: `展覽_產品頁面_${currentGameId.value}_點擊_試玩按鈕_${locale.value}` });
    isDemoShow.value = true;
};

const clickShareHandler = () => {
    useGtmSender({ event: `展覽_產品頁面_${currentGameId.value}_點擊_分享按鈕_${locale.value}` });
    isGameShareShow.value = true;
};

const gtmStatus = {
    '25%': false,
    '50%': false,
    '75%': false,
    '100%': false
};

const gtmHandler = ({
    percent = '25%'
}: {
            percent: '25%' | '50%' | '75%' | '100%';
        }) => {
    useGtmSender({
        event: `展覽_產品頁面_${currentGameId.value}_輪軸滾動_${locale.value}`
    });

    gtmStatus[percent] = true;
};

const scrollHeightChecker = (target: HTMLElement) => {
    if (!gameWrap.value) return;

    const basicHeight = target.scrollTop + target.offsetHeight;
    if (basicHeight >= (gameWrap.value.offsetHeight * 0.25) && !gtmStatus['25%']) {
        gtmHandler({ percent: '25%' });
    }
    if (basicHeight >= (gameWrap.value.offsetHeight * 0.50) && !gtmStatus['50%']) {
        gtmHandler({ percent: '50%' });
    }
    if (basicHeight >= (gameWrap.value.offsetHeight * 0.75) && !gtmStatus['75%']) {
        gtmHandler({ percent: '75%' });
    }
    if (basicHeight >= gameWrap.value.offsetHeight && !gtmStatus['100%']) {
        gtmHandler({ percent: '100%' });
    }
};

onMounted(() => {
    const target = document.querySelector('.main-container') as HTMLElement;
    target.scrollTo(0, 0);
    scrollHeightChecker(target);
    target?.addEventListener('scroll', () => {
        scrollHeightChecker(target);
    });
});

</script>

<template>
    <div
        class="game-wrap"
        ref="gameWrap"
    >
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
                    @click="clickDemoHandler"
                />
                <img
                    class="share"
                    src="@/assets/Game/game_share.png"
                    alt="share button"
                    @click="clickShareHandler"
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
