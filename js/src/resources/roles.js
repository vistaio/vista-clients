
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Roles extends ApiResource {
    async list(environment) {
        return this.dispatch('/v1/roles', HTTP_METHODS.GET, {
            environment: environment,
        });
    }

    async create(role_id, grants, parent_roles, environment) {
        return this.dispatch('/v1/roles', HTTP_METHODS.POST, {
            id: role_id,
            actions_by_resource_type: grants,
            parent_roles: parent_roles,
            environment: environment,
        });
    }

    async listUsersetsForRole(role_id, environment) {
        return this.dispatch(`/v1/roles/${role_id}/usersets`, HTTP_METHODS.GET, {
            environment: environment,
        });
    }

    async inherit(child_role_id, parent_role_id, environment) {
        return this.dispatch(`/v1/roles/inherit`, HTTP_METHODS.POST, {
            child_role_id: child_role_id,
            parent_role_id: parent_role_id,
            environment: environment,
        });
    }
}

export default Roles;
