import api from './api'
import state from './state'
const user = {
    create(email) {
        return fetch(`${api.domain}/users/`, {
                method: 'POST',
                headers: api.headers,
                body: JSON.stringify({
                    email
                })
            })
            .then(api.checkStatus)
            .then(api.parseJson)
            .then((response) => {
                state.set('user', response)
            })
    },
    get(key, live_key) {
        return fetch(`${api.domain}/users/${key}`, {
                method: 'GET',
                headers: api.getHeaders(key, live_key)
            })
            .then(api.checkStatus)
            .then(api.parseJson)
            .then((response) => {
                state.set('user', response)
            })
    }
}

export default user
