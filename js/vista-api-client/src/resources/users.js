
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Users extends ApiResource {
    create = async (userId) => {
        return this.dispatch('/v1/users', HTTP_METHODS.POST, {
            id: userId,
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

    check = async (userId, action, resourceType, resourceId) => {
        return this.dispatch('/v1/users/check', HTTP_METHODS.GET, {
            id: userId,
            action: action,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    expand = async (userId) => {
        return this.dispatch('/v1/users/expand', HTTP_METHODS.GET, {
            id: userId,
            branch: this.branch,
        });
    }

    grantAction = async (userId, action, resourceType, resourceId) => {
        return this.dispatch('/v1/users/grantAction', HTTP_METHODS.POST, {
            id: userId,
            action: action,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    revokeAction = async (userId, action, resourceType, resourceId) => {
        return this.dispatch('/v1/users/revokeAction', HTTP_METHODS.POST, {
            id: userId,
            action: action,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    grantRole = async (userId, role_id, resourceType, resourceId) => {
        return this.dispatch('/v1/users/grantRole', HTTP_METHODS.POST, {
            id: userId,
            role_id: role_id,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    revokeRole = async (userId, role_id, resourceType, resourceId) => {
        return this.dispatch('/v1/users/revokeRole', HTTP_METHODS.POST, {
            id: userId,
            role_id: role_id,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }
}

export default Users;
