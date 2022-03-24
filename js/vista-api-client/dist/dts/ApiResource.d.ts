import { AxiosInstance } from "axios";
export declare enum HttpMethods {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE"
}
export declare class ApiResource {
    axiosClient: AxiosInstance;
    branch: string;
    hostname: string;
    constructor(axiosClient: AxiosInstance, branch: string, hostname: string);
    dispatch: (url: string, method: HttpMethods, data?: {}) => Promise<any>;
}
