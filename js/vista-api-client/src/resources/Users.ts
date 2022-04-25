
import { AxiosInstance } from 'axios';
import { HttpMethods, ApiResource } from '../ApiResource';
import Grants from './Grants';

class Users extends ApiResource {
    grants: Grants;

    constructor(axiosClient: AxiosInstance, branch: string, hostname: string) {
        super(axiosClient, branch, hostname);
        this.grants = new Grants(axiosClient, branch, hostname);
    }

    create = async (userId: string, orgId: string) => {
        return this.dispatch('/v1/users', HttpMethods.POST, {
            id: userId,
            org_id: orgId,
            branch: this.branch,
        });
    }

    list = async (userId: string, orgId = '') => {
        return this.dispatch('/v1/users', HttpMethods.GET, {
            id: userId,
            org_id: orgId,
            branch: this.branch,
        });
    }

    assignToUserset = async (userId: string, usersetId: string) => {
        return this.dispatch('/v1/users/assign', HttpMethods.POST, {
            id: userId,
            userset_id: usersetId,
            branch: this.branch,
        });
    }

    removeFromUserset = async (userId: string, usersetId: string) => {
        return this.dispatch('/v1/users/removeFromUserset', HttpMethods.POST, {
            id: userId,
            userset_id: usersetId,
            branch: this.branch,
        });
    }

    check = async (userId: string, action: string, resourceId: string, resourceType: string, attribute = '') => {
        return this.grants.list(userId, action, resourceId, resourceType, attribute, '', null, null);
    }

    expand = async (userId: string) => {
        return this.grants.expand(userId);
    }

    grantAction = async (userId: string, action: string, resourceId: string, resourceType: string, attribute = '') => {
        return this.grants.grant(userId, 'USER', action, 'ACTION', resourceId, resourceType, attribute);
    }

    revokeAction = async (userId: string, action: string, resourceId: string, resourceType: string, attribute = '') => {
        return this.grants.revoke(userId, 'USER', action, 'ACTION', resourceId, resourceType, attribute);
    }

    grantRole = async (userId: string, role_id: string, resourceId: string, resourceType: string) => {
        return this.grants.grant(userId, 'USER', role_id, 'ROLE', resourceId, resourceType, '');
    }

    revokeRole = async (userId: string, role_id: string, resourceId: string, resourceType: string) => {
        return this.grants.revoke(userId, 'USER', role_id, 'ROLE', resourceId, resourceType, '');
    }
}

export default Users;
