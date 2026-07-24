import { createApp } from 'vue'
import App from './App.vue'

export const mountProducts = (el: HTMLElement | string) => {
    const app = createApp(App);
    app.mount(el);

    return () => {
        app.unmount();
    }
}

const devRoot = document.querySelector<HTMLDivElement>('#app')
if (devRoot) {
    mountProducts(devRoot);
}