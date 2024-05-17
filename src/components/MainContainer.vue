<script setup lang="ts">
import { watch, ref } from 'vue';
import Header from '@/components/Header/Header.vue';

const sideBarIsShow = ref(false);

watch(sideBarIsShow, () => {
    console.log(sideBarIsShow.value);
});
</script>

<template>
    <div class="main-container">
        <Header v-model="sideBarIsShow" />
        <router-view v-model="sideBarIsShow" />
    </div>
</template>

<style lang="scss">
</style>
