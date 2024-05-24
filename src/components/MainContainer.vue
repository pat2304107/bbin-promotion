<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Contact from './Contact/Contact.vue';
import { contactConfig } from '../config';
</script>

<template>
    <div class="main-container">
        <Header />
        <router-view v-slot="{ Component, route }">
            <transition
                name="fade"
                mode="out-in"
            >
                <component
                    :is="Component"
                    :key="route.path"
                />
            </transition>
        </router-view>

        <Contact v-if="contactConfig" />
    </div>
</template>

<style lang="scss">
.main-container{
    position: relative;
    overflow: scroll;
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/bg_m.png');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 100% ;
    z-index: 2;

    @media (min-width: 576px) {
        margin: 0 auto;
        width: 576px;
        background-size: 100%;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
}
</style>
