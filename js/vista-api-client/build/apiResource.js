"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResource = exports.HttpMethods = void 0;
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["GET"] = "GET";
    HttpMethods["POST"] = "POST";
    HttpMethods["DELETE"] = "DELETE";
})(HttpMethods = exports.HttpMethods || (exports.HttpMethods = {}));
class ApiResource {
    constructor(axiosClient, branch, hostname) {
        this.dispatch = (url, method, data = {}) => __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: new URL(url, this.hostname).href,
                method: method,
                data: {},
            };
            if (data) {
                if (method === HttpMethods.GET) {
                    config.url = `${config.url}?${new URLSearchParams(data)}`;
                }
                else {
                    config.data = data;
                }
            }
            const resp = yield this.axiosClient.request(config).catch((error) => {
                if (error.response) {
                    throw Error(error.response.data.message);
                }
                else if (error.request) {
                    throw Error('There was a problem with the request');
                }
                else {
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
        });
        this.axiosClient = axiosClient;
        this.branch = branch;
        this.hostname = hostname;
    }
}
exports.ApiResource = ApiResource;
//# sourceMappingURL=apiResource.js.map