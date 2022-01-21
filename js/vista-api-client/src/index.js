
import Axios from 'axios';

import config from './config/config.js';

import Admin from './resources/admin.js';
import ResourceTypes from './resources/resourceTypes.js';
import Roles from './resources/roles.js';
import Users from './resources/users.js';
import Usersets from './resources/usersets.js';

class VistaClient {
    static ALL = '*';

    constructor(secret, branch, hostname) {
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
        this.resourceTypes = new ResourceTypes(this.axios, branch, this.hostname);
        this.roles = new Roles(this.axios, branch, this.hostname);
        this.users = new Users(this.axios, branch, this.hostname);
        this.usersets = new Usersets(this.axios, branch, this.hostname);
    }
}

export default VistaClient;

