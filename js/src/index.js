
import Axios from 'axios';

import Admin from './resources/admin.js';
import ResourceTypes from './resources/resourceTypes.js';
import Roles from './resources/roles.js';
import Users from './resources/users.js';
import Usersets from './resources/usersets.js';

class VistaClient {
    constructor(secret) {
        this.secret = secret;

        this.axios = Axios.create({
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${secret}`,
            },
        });

        this.admin = new Admin(this.axios);
        this.resources = new ResourceTypes(this.axios);
        this.roles = new Roles(this.axios);
        this.users = new Users(this.axios);
        this.usersets = new Usersets(this.axios);
    }
}

export default VistaClient;
