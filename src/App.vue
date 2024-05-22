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
    // min-width: 480px;
    min-height: 100%;
}
</style>
