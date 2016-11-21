import api from './api'

const link = {
    create(email) {
        return fetch(`${api.domain}/links/`, {
                method: 'POST',
                headers: api.headers,
                body: JSON.stringify({
                    email
                })
            })
            .then(api.checkStatus)
            .then(api.parseJson)
    }
}

export default user
