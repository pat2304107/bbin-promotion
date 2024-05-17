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
    min-width: 480px;
    min-height: 100vh;
    background-color: rgba(0,0,0,0.3);

    .main-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        z-index: 2;
        height: 100vh;
        background-color: white;

        @media (min-width: 576px) {
            margin: 0 auto;
            width: 576px;
        }
    }
}
</style>
