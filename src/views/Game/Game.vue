<script setup lang="ts">
</script>

<template>
    <div class="game-wrap">
        <div class="title">
            {{ $t(`GAME_OVERVIEW.${$route.params.game}.TITLE`) }}
        </div>
        <div class="content">
            {{ $t(`GAME_OVERVIEW.${$route.params.game}.CONTENT`) }}
        </div>
    </div>
</template>

<style lang="scss">
@import "./Game";
</style>
