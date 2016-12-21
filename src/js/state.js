import store from 'store';

const state = {
    data: {
        user: {
            id: '',
            key: '',
            email: '',
            live_key: '',
        },
        links: [],
    },
    init() {
        const user = store.get('user');
        this.data.user = user || {
            id: '',
        };
    },
    get(key, id = null) {
        if (id && typeof this[key] === 'object') return this.data[key][id];
        return this.data[key];
    },
    set(key, payload, id = null) {
        try {
            if (id && typeof this[key] === 'object') this.data[key][id] = payload;
            else this.data[key] = payload;
            store.set(key, payload);
        } catch (e) {
            console.error(`Could not store ${key}:${id}`);
        }
    },
};

export default state;
