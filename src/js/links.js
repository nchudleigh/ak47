import api from './api'

const links = {
    update(payload) {
        return fetch(`${api.domain}/links/${payload.id}`, {
                method: 'PATCH',
                headers: api.headers,
                body: JSON.stringify(payload)
            })
            .then(api.checkStatus)
            .then(api.parseJson)
    }
}

export default links
