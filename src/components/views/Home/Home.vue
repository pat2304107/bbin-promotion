<script setup lang="ts">
const sideBarIsShow = defineModel<boolean>();

const entryClickHandler = () => {
    sideBarIsShow.value = !sideBarIsShow.value;
};
</script>

<template>
    <div class="home-wrap">
        <button
            class="entry"
            @click="entryClickHandler"
        >
            進入
        </button>
    </div>
</template>

<style lang="scss">
@import "./Home";
</style>
