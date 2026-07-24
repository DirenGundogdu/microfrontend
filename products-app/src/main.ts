import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

export const mountProducts = (el: HTMLElement | string) => {
    const app = createApp(App);
    app.mount(el);

    return () => {
        app.unmount();
    }
}

if (import.meta.env.DEV) {
    const devRoot = document.querySelector<HTMLDivElement>('#app')
    if (devRoot) {
        mountProducts(devRoot);
    }
}