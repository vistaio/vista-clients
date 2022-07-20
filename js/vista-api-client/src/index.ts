
import Axios, { AxiosInstance } from 'axios';

import fs from 'fs';
import yaml from 'js-yaml';

import config from './config/Config';

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
    blueprint: Blueprints
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
        this.blueprint = new Blueprints(this);
        this.grants = new Grants(this.axios, branch, this.hostname);
        this.resourceTypes = new ResourceTypes(this.axios, branch, this.hostname);
        this.roles = new Roles(this.axios, branch, this.hostname);
        this.users = new Users(this.axios, branch, this.hostname);
        this.usersets = new Usersets(this.axios, branch, this.hostname);
    }

    withBranch(branch: string) {
        return new VistaClient(this.secret, branch, this.hostname);
    }
}

type Blueprint = {
    [branch: string]: { resourceTypes: any; roles: any };
}

class Blueprints {
    client: VistaClient;

    constructor(client: VistaClient) {
        this.client = client;
    }

    upsert = async (fname: string) => {
        const contents = fs.readFileSync(fname, 'utf-8');
        const blueprint = yaml.load(contents) as Blueprint;

        for (const branch in blueprint) {
            if (blueprint[branch]) {
                const branchBp = blueprint[branch];

                for (const rt of branchBp.resourceTypes) {
                    await this.client.withBranch(branch).resourceTypes.upsert(rt.name, rt.actions, rt.attributes);
                }

                for (const role of branchBp.roles) {
                    await this
                        .client
                        .withBranch(branch)
                        .roles.upsert(role.id, role.permissions, role.owners, role.parentRoles, role.orgId);
                }
            }
        }
    }
}
