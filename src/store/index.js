import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    strict: true,
    state: {
        user: {
            id: '',
            key: '',
            email: '',
            live_key: '',
        },
        links: {},
    },
    mutations: {
        get(key, id = null) {
            if (id && typeof this.data[key] === 'object') return this.data[key][id];
            return this.data[key];
        },
        set_user(state, data) {
            state.user = data;
        },
        add_link(state, data) {
            state.links[data.key] = data;
        },
    },
};

export default store;
