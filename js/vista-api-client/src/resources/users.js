
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Users extends ApiResource {
    create = async (user_id, branch) => {
        return this.dispatch('/v1/users', HTTP_METHODS.POST, {
            id: user_id,
            branch: branch,
        });
    }

    assignToUserset = async (user_id, userset_id, branch) => {
        return this.dispatch('/v1/users/assign', HTTP_METHODS.POST, {
            id: user_id,
            userset_id: userset_id,
            branch: branch,
        });
    }

    check = async (user_id, action, resource_type, resource_id, branch) => {
        return this.dispatch('/v1/users/check', HTTP_METHODS.GET, {
            id: user_id,
            action: action,
            resource_type: resource_type,
            resource_id: resource_id,
            branch: branch,
        });
    }

    grantAction = async (user_id, action, resource_type, resource_id, branch) => {
        return this.dispatch('/v1/users/grantAction', HTTP_METHODS.POST, {
            id: user_id,
            action: action,
            resource_type: resource_type,
            resource_id: resource_id,
            branch: branch,
        });
    }

    grantRole = async (user_id, role_id, resource_type, resource_id, branch) => {
        return this.dispatch('/v1/users/grantRole', HTTP_METHODS.POST, {
            id: user_id,
            role_id: role_id,
            resource_type: resource_type,
            resource_id: resource_id,
            branch: branch,
        });
    }
}

export default Users;
