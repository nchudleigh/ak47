import store from 'store'

const state = {
    data: {
        user: {
            id: "",
            key: "",
            email: "",
            live_key: ""
        },
        links: []
            // links: [{
            //     id: 'link_1',
            //     path: '/:search',
            //     dest: 'google.com/:search'
            // }, {
            //     id: 'link_2',
            //     path: '/:version/*',
            //     dest: 'd123.cloudfront.aws.com/:version/*'
            // }]
    },
    init() {
        let user = store.get('user');
        this.data.user = user ? user : {
            id: ""
        };
        let links = store.get('links');
        this.data.links = links ? links : [];
    },
    get(key, id = null) {
        if (id && typeof this[key] == 'object') return this.data[key][id] = payload;
        else return this.data[key];
    },
    set(key, payload, id = null) {
        try {
            if (id && typeof this[key] == 'object') this.data[key][id] = payload;
            else this.data[key] = payload;
            store.set(key, payload);
        } catch (e) {
            console.error(`Could not store ${key}:${id}`);
        }
    }
}

export default state
