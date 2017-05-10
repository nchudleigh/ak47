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
    },
    methods: {
        init() {
            const user = store.get('user');
            if (user) {
                this.user = user;
            }
        },
        get(key, id = null) {
            if (id && typeof this[key] === 'object') return this.data[key][id];
            return this[key];
        },
        update(key, payload) {
            Object.assign(this[key], payload);
        },
        set(key, payload, id = null) {
            console.log(id && typeof this[key] === 'object');
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
