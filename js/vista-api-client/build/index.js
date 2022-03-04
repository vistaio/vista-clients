"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_js_1 = __importDefault(require("./config/config.js"));
const Admin_1 = __importDefault(require("./resources/Admin"));
const Grants_1 = __importDefault(require("./resources/Grants"));
const ResourceTypes_1 = __importDefault(require("./resources/ResourceTypes"));
const Roles_1 = __importDefault(require("./resources/Roles"));
const Users_1 = __importDefault(require("./resources/Users"));
const Usersets_1 = __importDefault(require("./resources/Usersets"));
class VistaClient {
    constructor(secret, branch, hostname) {
        this.secret = secret;
        this.axios = axios_1.default.create({
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${secret}`,
            },
        });
        this.hostname = hostname || config_js_1.default.VistaAPIHostname;
        this.admin = new Admin_1.default(this.axios, branch, this.hostname);
        this.grants = new Grants_1.default(this.axios, branch, this.hostname);
        this.resourceTypes = new ResourceTypes_1.default(this.axios, branch, this.hostname);
        this.roles = new Roles_1.default(this.axios, branch, this.hostname);
        this.users = new Users_1.default(this.axios, branch, this.hostname);
        this.usersets = new Usersets_1.default(this.axios, branch, this.hostname);
    }
}
VistaClient.ALL = '*';
exports.default = VistaClient;
//# sourceMappingURL=index.js.map