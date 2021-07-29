
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Users extends ApiResource {
    create = async (user_id, environment) => {
        return this.dispatch('/v1/users', HTTP_METHODS.POST, {
            id: user_id,
            environment: environment,
        });
    }

    assignToUserset = async (user_id, userset_id, environment) => {
        return this.dispatch('/v1/users/assign', HTTP_METHODS.POST, {
            id: user_id,
            userset_id: userset_id,
            environment: environment,
        });
    }

    check = async (user_id, action, resource_type, resource_id, environment) => {
        return this.dispatch('/v1/users/check', HTTP_METHODS.GET, {
            id: user_id,
            action: action,
            resource_type: resource_type,
            resource_id: resource_id,
            environment: environment,
        });
    }

    grant = async (user_id, action, resource_type, resource_id, environment) => {
        return this.dispatch('/v1/users/grant', HTTP_METHODS.POST, {
            id: user_id,
            action: action,
            resource_type: resource_type,
            resource_id: resource_id,
            environment: environment,
        });
    }
}

export default Users;
