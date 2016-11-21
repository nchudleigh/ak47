var api = {
    domain: process.env.API_DOMAIN,
    headers: {
        'Content-Type': 'application/json'
    },
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(`${response.status} ${response.statusText}`)
            error.response = response
            throw error
        }
    },
    parseJson: response => response.json()
}

export default api
