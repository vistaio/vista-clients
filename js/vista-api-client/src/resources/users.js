
import { HTTP_METHODS, ApiResource } from '../apiResource.js';
import Grants from './grants';

class Users extends ApiResource {
    constructor(axiosClient, branch, hostname) {
        super(axiosClient, branch, hostname);
        this.grants = new Grants(axiosClient, branch, hostname);
    }

    create = async (userId, orgId) => {
        return this.dispatch('/v1/users', HTTP_METHODS.POST, {
            id: userId,
            org_id: orgId,
            branch: this.branch,
        });
    }

    list = async (userId, orgId='') => {
        return this.dispatch('/v1/users', HTTP_METHODS.GET, {
            id: userId,
            org_id: orgId,
            branch: this.branch,
        });
    }

    assignToUserset = async (userId, usersetId) => {
        return this.dispatch('/v1/users/assign', HTTP_METHODS.POST, {
            id: userId,
            userset_id: usersetId,
            branch: this.branch,
        });
    }

    removeFromUserset = async (userId, usersetId) => {
        return this.dispatch('/v1/users/removeFromUserset', HTTP_METHODS.POST, {
            id: userId,
            userset_id: usersetId,
            branch: this.branch,
        });
    }

    check = async (userId, action, resourceId, resourceType, attribute='') => {
        return this.grants.check(userId, action, resourceId, resourceType, attribute);
    }

    expand = async (userId) => {
        return this.grants.expand(userId);
    }

    grantAction = async (userId, action, resourceId, resourceType, attribute='') => {
        return this.grants.grant(userId, 'USER', action, 'ACTION', resourceId, resourceType, attribute);
    }

    revokeAction = async (userId, action, resourceId, resourceType, attribute = '') => {
        return this.grants.revoke(userId, 'USER', action, 'ACTION', resourceId, resourceType, attribute);
    }

    grantRole = async (userId, role_id, resourceId, resourceType) => {
        return this.grants.grant(userId, 'USER', role_id, 'ROLE', resourceId, resourceType, '');
    }

    revokeRole = async (userId, role_id, resourceId, resourceType) => {
        return this.grants.revoke(userId, 'USER', role_id, 'ROLE', resourceId, resourceType, '');
    }
}

export default Users;
