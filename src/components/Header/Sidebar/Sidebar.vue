<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import config, { contactConfig } from '@/config';
import useGtmSender from '@/composables/useGtmSender';
import publishConfig from '../../../../publish.config';

const { locale } = useI18n();
const sidebarIsShow = defineModel<boolean>();

const { gameList } = config;

const clickGameHandler = (gameId: number) => {
    useGtmSender({
        event: `展覽_選單頁_遊戲_點擊_${gameId}_${locale.value}`,
        target_url: `${publishConfig.domain}${publishConfig.path}#/${locale.value}/${gameId}`
    });
    sidebarIsShow.value = false;
};

const openContact = () => {
    useGtmSender({ event: `展覽_選單頁_聯絡我們_點擊_聯絡我們_${locale.value}` });
    sidebarIsShow.value = false;
    contactConfig.value = true;
};
</script>

<template>
    <div
        class="sidebar-wrap"
        :class="{'open': sidebarIsShow}"
    >
        <div class="sidebar-scaler">
            <div class="sidebar-block sidebar-left">
                <div class="title">
                    <span>▌</span>
                    <span class="wording">
                        {{ $t('HEADER.SIDEBAR.GAME_TITLE') }}
                    </span>
                </div>
                <div
                    v-for="game in gameList"
                    :key="game.id"
                    class="game-link"
                >
                    <router-link
                        :to="`/${$i18n.locale}/${game.id}`"
                        @click="clickGameHandler(game.id)"
                    >
                        {{ $t(`GAME.${game.id}.NAME`) }}
                    </router-link>
                </div>
            </div>

            <div class="sidebar-block sidebar-right">
                <div class="title">
                    <span>▌</span>
                    <span class="wording">
                        {{ $t('HEADER.SIDEBAR.BBIN_INFO') }}
                    </span>
                </div>

                <div class="bbin-link">
                    <a
                        :href="`https://www.bbin-news.com${$i18n.locale === 'cn' ? '' : '/en-US'}/?utm_source=promo`"
                        target="_blank"
                        @click="useGtmSender({
                            event: `展覽_選單頁_BBIN資訊_點擊_BB NEWS_${$i18n.locale}`,
                            target_url: `https://www.bbin-news.com${$i18n.locale === 'cn' ? '' : '/en-US'}/?utm_source=promo`
                        })"
                    >
                        {{ $t('HEADER.SIDEBAR.BB_NEWS') }}
                    </a>
                </div>

                <div class="bbin-link">
                    <a
                        :href="`https://bbin-casino.com${$i18n.locale === 'cn' ? '' : '/en'}/?utm_source=promo`"
                        target="_blank"
                        @click="useGtmSender({
                            event: `展覽_選單頁_BBIN資訊_點擊_BBIN電子站_${$i18n.locale}`,
                            target_url: `https://bbin-casino.com${$i18n.locale === 'cn' ? '' : '/en'}/?utm_source=promo`
                        })"
                    >
                        {{ $t('HEADER.SIDEBAR.BB_CASINO') }}
                    </a>
                </div>

                <div
                    class="contact-btn"
                    @click="openContact"
                >
                    {{ $t('HEADER.SIDEBAR.CONTACT') }}
                </div>
            </div>
        </div>

        <div
            v-show="sidebarIsShow"
            class="mask"
            @click="() => sidebarIsShow = false"
        />
    </div>
</template>

<style scoped lang="scss">
@import './Sidebar';
</style>
