<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Contact from './Contact/Contact.vue';
import { contactConfig } from '../config';
</script>

<template>
    <div class="main-container">
        <div class="halo" />
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

        <Contact
            v-if="contactConfig"
        />
    </div>
</template>

<style lang="scss">
.main-container{
    position: relative;
    overflow-y: scroll;
    width: 100%;
    height: 100dvh;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% 100% ;
    z-index: 2;
    background-image: url('@/assets/bg_m.png');
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;

    @media (width >= 576px) {
        margin: 0 auto;
        width: 576px;
    }

    .halo{
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 60vh;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: 100% 100% ;
        background-image: url('@/assets/bg_m_halo.png');
        opacity: 0.5;
        animation: breathing 2.5s infinite alternate ease-in-out;

        @media (width >= 576px) {
            width: 576px;
            background-size: 100%;
        }

        @keyframes breathing {
            100% {
                opacity: 1;
            }
        }
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
