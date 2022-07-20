import { AxiosInstance } from 'axios';
import Admin from './resources/Admin';
import Grants from './resources/Grants';
import ResourceTypes from './resources/ResourceTypes';
import Roles from './resources/Roles';
import Users from './resources/Users';
import Usersets from './resources/Usersets';
export default class VistaClient {
    static ALL: string;
    secret: string;
    axios: AxiosInstance;
    hostname: string;
    admin: Admin;
    blueprint: Blueprints;
    grants: Grants;
    resourceTypes: ResourceTypes;
    roles: Roles;
    users: Users;
    usersets: Usersets;
    constructor(secret: string, branch: string, hostname: string);
    withBranch(branch: string): VistaClient;
}
declare class Blueprints {
    client: VistaClient;
    constructor(client: VistaClient);
    upsert: (fname: string) => Promise<void>;
}
export {};
