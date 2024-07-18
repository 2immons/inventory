import { createPinia, PiniaPlugin } from 'pinia';

const pinia = createPinia();

const piniaPlugin: PiniaPlugin = ({ store }) => {
    const storedState = localStorage.getItem(store.$id);
    if (storedState) {
        store.$patch(JSON.parse(storedState));
    }

    store.$subscribe((mutation, state) => {
        localStorage.setItem(store.$id, JSON.stringify(state));
    });
};

pinia.use(piniaPlugin);

export default pinia;
