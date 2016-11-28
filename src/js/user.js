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
            .then(state.save(response, 'user'))
    },
    get(payload) {
        return fetch(`${api.domain}/users/`, {
                method: 'GET',
                headers: api.headers,
                body: JSON.stringify(payload)
            })
            .then(api.checkStatus)
            .then(api.parseJson)
            .then(state.save(response, 'user'))
    }
}

export default user
