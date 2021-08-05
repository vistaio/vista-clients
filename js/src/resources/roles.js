
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Roles extends ApiResource {
    list = async (environment) => {
        return this.dispatch('/v1/roles', HTTP_METHODS.GET, {
            environment: environment,
        });
    }

    create = async (role_id, grants, parent_roles, environment) => {
        return this.dispatch('/v1/roles', HTTP_METHODS.POST, {
            id: role_id,
            actions_by_resource_type: grants,
            parent_roles: parent_roles,
            environment: environment,
        });
    }

    listUsersetsForRole = async (role_id, environment) => {
        return this.dispatch(`/v1/roles/${role_id}/usersets`, HTTP_METHODS.GET, {
            environment: environment,
        });
    }

    inherit = async (child_role_id, parent_role_id, environment) => {
        return this.dispatch(`/v1/roles/inherit`, HTTP_METHODS.POST, {
            child_role_id: child_role_id,
            parent_role_id: parent_role_id,
            environment: environment,
        });
    }
}

export default Roles;
