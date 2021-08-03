
import Config from './config/config.js';

const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
}

class ApiResource {
    constructor(axiosClient) {
        this.axiosClient = axiosClient;
    }

    async dispatch(url, method, data) {
        const config = {
            url: `${Config.VistaAPIHostname}${url}`,
            method: method,
        }

        if (data) {
            if (method === HTTP_METHODS.GET) {
                config.url = `${config.url}?${new URLSearchParams(data)}`;
            } else if (method === HTTP_METHODS.POST) {
                config.data = data;
            }
        }

        const resp = await this.axiosClient.request(config).catch(function(error) {
            if (error.response) {
                throw Error(error.response.data.error);
            } else if (error.request) {
                throw Error('There was a problem with the request');
            } else {
                throw error;
            }
        });

        if (!resp) {
            throw Error('There was a problem with the request');
        }

        if (resp.status === 204) {
            return true;
        }

        return resp.data;
    };
}

export { HTTP_METHODS, ApiResource };
