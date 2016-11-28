const state = {
    data: {
        user: {
            id: "",
            key: "",
            email: "",
            live_key: ""
        },
        links: [{
            id: 'link_1',
            path: '/:search',
            dest: 'google.com/:search'
        }, {
            id: 'link_2',
            path: '/:version/*',
            dest: 'd123.cloudfront.aws.com/:version/*'
        }]
    },
    update() {
        localStorage.setItem('glock', this)
    },
    get(key, id = null) {
        return this.data[key];
    },
    set(payload, key, id = null) {
        return (key, id) => {
            try {
                if (id) this.data[key][id] = payload;
                else this.data[key] = payload;
                this.update();
            } catch (e) {
                console.error(`Could not store ${key}:${id}`)
            }
        }
    }
}

export default state
