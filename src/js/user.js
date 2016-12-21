import fetch from 'whatwg-fetch';
import api from './api';
import state from './state';

const user = {
    create(email) {
        const options = {
            method: 'POST',
            headers: api.headers,
            body: JSON.stringify({
                email,
            }),
        };
        return fetch(`${api.domain}/users/`, options)
            .then(api.checkStatus)
            .then(api.parseJson)
            .then((response) => {
                state.set('user', response);
            });
    },
    get(key, live_key) {
        const options = {
            method: 'GET',
            headers: api.getHeaders(key, live_key),
        };
        return fetch(`${api.domain}/users/${key}`, options)
            .then(api.checkStatus)
            .then(api.parseJson)
            .then((response) => {
                state.set('user', response);
            });
    },
};

export default user;
