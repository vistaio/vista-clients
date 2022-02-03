
const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
}

class ApiResource {
    constructor(axiosClient, branch, hostname) {
        this.axiosClient = axiosClient;
        this.branch = branch;
        this.hostname = hostname;
    }

    dispatch = async (url, method, data) => {
        const config = {
            url: new URL(url, this.hostname).href,
            method: method,
        }

        if (data) {
            if (method === HTTP_METHODS.GET) {
                config.url = `${config.url}?${new URLSearchParams(data)}`;
            } else if (method === HTTP_METHODS.POST) {
                config.data = data;
            }
        }

        const resp = await this.axiosClient.request(config).catch((error) => {
            if (error.response) {
                throw Error(error.response.data.message);
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

        return resp.data.data;
    };
}

export { HTTP_METHODS, ApiResource };
