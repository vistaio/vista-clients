
import Axios from 'axios';

import config from './config/config.js';

import Admin from './resources/admin.js';
import ResourceTypes from './resources/resourceTypes.js';
import Roles from './resources/roles.js';
import Users from './resources/users.js';
import Usersets from './resources/usersets.js';

class VistaClient {
    constructor(secret, hostname) {
        this.secret = secret;

        this.axios = Axios.create({
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${secret}`,
            },
        });

        if (!hostname) {
            hostname = config.VistaAPIHostname
        }

        this.admin = new Admin(this.axios, hostname);
        this.resources = new ResourceTypes(this.axios, hostname);
        this.roles = new Roles(this.axios, hostname);
        this.users = new Users(this.axios, hostname);
        this.usersets = new Usersets(this.axios, hostname);
    }
}

export default VistaClient;

