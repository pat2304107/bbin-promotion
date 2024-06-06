<script setup lang="ts">
import MainContainer from './components/MainContainer.vue';
</script>

<template>
    <div
        id="app"
        class="app"
    >
        <MainContainer />
    </div>
</template>

<style lang="scss">
@import "./styles/index";

.app {
    position: relative;
    overflow: hidden;
    min-height: 100%;
    background-position: center top;
    background-size: 1920px auto;
    background-image: url('@/assets/bg.jpg');

    @media (width >= 1920px) {
        background-size: 100%;
    }
}
</style>
