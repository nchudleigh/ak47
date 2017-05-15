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
                // TODO: Figure out duplicates issue
                console.log('got more links', response);
                response.forEach((li) => {
                    console.log(li.id);
                    state.set('links', li, li.id);
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
                state.set('links', response, response.id);
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
                state.set('links', response, response.id);
                return response;
            });
    },
};

export default links;
