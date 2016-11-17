import api from './api'

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
      .then(r => r.json())
  }
}

export default user
