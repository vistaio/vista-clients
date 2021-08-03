
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Users extends ApiResource {
    async create(user_id, environment) {
        return this.dispatch('/v1/users', HTTP_METHODS.POST, {
            id: user_id,
            environment: environment,
        });
    }

    async assignToUserset(user_id, userset_id, environment) {
        return this.dispatch('/v1/users/assign', HTTP_METHODS.POST, {
            id: user_id,
            userset_id: userset_id,
            environment: environment,
        });
    }

    async check(user_id, action, resource_type, resource_id, environment) {
        return this.dispatch('/v1/users/check', HTTP_METHODS.GET, {
            id: user_id,
            action: action,
            resource_type: resource_type,
            resource_id: resource_id,
            environment: environment,
        });
    }

    async grant(user_id, action, resource_type, resource_id, environment) {
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
