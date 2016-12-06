import api from './api'
import state from './state'

const links = {
    get() {
        return fetch(`${api.domain}/links/`, {
                methods: 'GET',
                headers: api.getHeaders(),
            })
            .then(api.checkStatus)
            .then(api.parseJson)
            .then(links => {
                console.log(links);
            })
    },
    create(payload) {
        return fetch(`${api.domain}/links/`, {
                method: 'POST',
                headers: api.getHeaders(),
                body: JSON.stringify(payload)
            })
            .then(api.checkStatus)
            .then(api.parseJson)
    },
    update(payload) {
        return fetch(`${api.domain}/links/${payload.id}`, {
                method: 'PATCH',
                headers: api.getHeaders(),
                body: JSON.stringify(payload)
            })
            .then(api.checkStatus)
            .then(api.parseJson)
    }
}

export default links
