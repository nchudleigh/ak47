import state from './state';

const api = {
    domain: process.env.API_DOMAIN,
    headers: {
        'Content-Type': 'application/json',
    },
    getHeaders(okey = '', olive_key = '', headers = this.headers) {
        let key = '';
        let live_key = '';
        if (!okey || !olive_key) {
            const user = state.get('user');
            key = user.key;
            live_key = user.live_key;
        }
        const b64_key = btoa(`${key}:${live_key}`);
        headers.Authorization = `Basic ${b64_key}`;
        return headers;
    },
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        const error = new Error(`${response.status} ${response.statusText}`);
        error.response = response;
        throw error;
    },
    parseJson: response => response.json(),
};

export default api;
