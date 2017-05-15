import store from 'store';
import Vue from 'vue';

const state = new Vue({
    data: {
        user: {
            id: '',
            key: '',
            email: '',
            live_key: '',
        },
        links: {},
        onboard: {
            links: {
                created: false,
                read: false,
            },
        },
    },
    methods: {
        init() {
            const user = store.get('user');
            if (user) {
                this.user = user;
            }
            const onboard = store.get('onboard');
            if (onboard) {
                this.onboard = onboard;
            }
        },
        get(key, id = null) {
            if (id && typeof this[key] === 'object') return this.data[key][id];
            return this[key];
        },
        set(key, payload, id = null) {
            try {
                if (id && typeof this[key] === 'object') Vue.set(this[key], id, payload);
                else this[key] = payload;
                store.set(key, payload);
            } catch (e) {
                console.log(e);
                console.error(`Could not store ${key}:${id}`);
            }
        },
    },
});

export default state;
