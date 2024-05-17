/// <reference types="vite/client" />

// Declare Vue files
declare module '*.vue' {
    import { defineComponent } from 'vue';

    const component: ReturnType<typeof defineComponent>;

    export default component;
}

// Declare ga dataLayer
interface Window {
    dataLayer: Record<string, any>;
}
