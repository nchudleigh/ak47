import state from './state'

var api = {
    domain: process.env.API_DOMAIN,
    headers: {
        'Content-Type': 'application/json'
    },
    getHeaders(key = null, live_key = null, headers = this.headers) {
        if (!key || !live_key) {
            let user = state.get('user');
            key = user.key;
            live_key = user.live_key;
        }
        console.log(key, live_key);
        headers['Authorization'] = "Basic " + btoa(key + ":" + live_key);
        return headers;
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
