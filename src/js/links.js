import api from './api';
import state from './state';

const links = {
    get() {
        const options = {
            method: 'GET',
            headers: api.getHeaders(),
        };
        return fetch(`${api.domain}/links/`, options)
            .then(api.checkStatus)
            .then(api.parseJson)
            .then((response) => {
                console.log(response);
                response.forEach((li) => {
                    state.set('link', li);
                });
                return response;
            });
    },
    create(payload) {
        const options = {
            method: 'POST',
            headers: api.getHeaders(),
            body: JSON.stringify(payload),
        };
        return fetch(`${api.domain}/links/`, options)
            .then(api.checkStatus)
            .then(api.parseJson)
            .then((response) => {
                state.set('link', response);
                return response;
            });
    },
    update(payload) {
        const options = {
            method: 'PATCH',
            headers: api.getHeaders(),
            body: JSON.stringify(payload),
        };
        return fetch(`${api.domain}/links/${payload.id}`, options)
            .then(api.checkStatus)
            .then(api.parseJson)
            .then((response) => {
                state.set('link', response);
                return response;
            });
    },
};

export default links;
