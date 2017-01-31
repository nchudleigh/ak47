import api from './api';

const links = {
    get() {
        console.log('in this house');
        const options = {
            methods: 'GET',
            headers: api.getHeaders(),
        };
        return fetch(`${api.domain}/links/`, options)
            .then(api.checkStatus)
            .then(api.parseJson);
    },
    create(payload) {
        const options = {
            method: 'POST',
            headers: api.getHeaders(),
            body: JSON.stringify(payload),
        };
        return fetch(`${api.domain}/links/`, options)
            .then(api.checkStatus)
            .then(api.parseJson);
    },
    update(payload) {
        const options = {
            method: 'PATCH',
            headers: api.getHeaders(),
            body: JSON.stringify(payload),
        };
        return fetch(`${api.domain}/links/${payload.id}`, options)
            .then(api.checkStatus)
            .then(api.parseJson);
    },
};

export default links;
