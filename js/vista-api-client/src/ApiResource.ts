
import { AxiosInstance } from "axios";

export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
}

export class ApiResource {
    axiosClient: AxiosInstance;
    branch: string;
    hostname: string;

    constructor(axiosClient: AxiosInstance, branch: string, hostname: string) {
        this.axiosClient = axiosClient;
        this.branch = branch;
        this.hostname = hostname;
    }

    dispatch = async (url: string, method: HttpMethods, data={}): Promise<any> => {
        const config = {
            url: new URL(url, this.hostname).href,
            method: method,
            data: {},
        }

        if (data) {
            if (method === HttpMethods.GET) {
                config.url = `${config.url}?${new URLSearchParams(data)}`;
            } else {
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
            return {};
        }

        return resp.data.data;
    };
}
