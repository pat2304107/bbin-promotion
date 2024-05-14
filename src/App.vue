<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
</script>

<template>
    <div
        id="app"
        class="app"
    >
        <Header />
        <router-view />
    </div>
</template>

<style lang="scss">
@import "./styles/index";
</style>
