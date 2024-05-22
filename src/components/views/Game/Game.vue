<script setup lang="ts">
import { ref } from 'vue';
import useGtmSender from '@/composables/useGtmSender';

const isDemoShow = ref(false);
</script>

<template>
    <div class="game-wrap">
        <button
            @click="useGtmSender({
                event: 'gtm_test',
                target_url: 'www.test.com'
            })"
        >
            gtm hi
        </button>
        <div class="title">
            {{ $t(`GAME.${$route.params.game}.TITLE`) }}
        </div>
        <div class="content">
            {{ $t(`GAME.${$route.params.game}.CONTENT`) }}
        </div>
        <div class="promote">
            {{ $t(`GAME.${$route.params.game}.PROMOTE1`) }}
        </div>
        <div class="promote">
            {{ $t(`GAME.${$route.params.game}.PROMOTE2`) }}
        </div>

        <button
            @click="isDemoShow = !isDemoShow"
        >
            demo
        </button>

        <div
            class="iframe-warp"
            v-if="isDemoShow"
            @click="isDemoShow = !isDemoShow"
        >
            <iframe
                :src="`https://bb-guest.com:5569/game/game.php?GameType=${$route.params.game}&lang=${$i18n.locale}`"
                width="70%"
                height="70%"
                frameborder="0"
            />
        </div>
    </div>
</template>

<style lang="scss">
@import "./Game";
</style>
