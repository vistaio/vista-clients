
import Axios, { AxiosInstance } from 'axios';

import config from './config/config.js';

import Admin from './resources/Admin';
import Grants from './resources/Grants';
import ResourceTypes from './resources/ResourceTypes';
import Roles from './resources/Roles';
import Users from './resources/Users';
import Usersets from './resources/Usersets';

export default class VistaClient {
    static ALL = '*';
    secret: string;
    axios: AxiosInstance;
    hostname: string;

    admin: Admin;
    grants: Grants;
    resourceTypes: ResourceTypes;
    roles: Roles;
    users: Users;
    usersets: Usersets;

    constructor(secret: string, branch: string, hostname: string) {
        this.secret = secret;

        this.axios = Axios.create({
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${secret}`,
            },
        });

        this.hostname = hostname || config.VistaAPIHostname;

        this.admin = new Admin(this.axios, branch, this.hostname);
        this.grants = new Grants(this.axios, branch, this.hostname);
        this.resourceTypes = new ResourceTypes(this.axios, branch, this.hostname);
        this.roles = new Roles(this.axios, branch, this.hostname);
        this.users = new Users(this.axios, branch, this.hostname);
        this.usersets = new Usersets(this.axios, branch, this.hostname);
    }
}
