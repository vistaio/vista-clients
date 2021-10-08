
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Roles extends ApiResource {
    list = async (branch) => {
        return this.dispatch('/v1/roles', HTTP_METHODS.GET, {
            branch: branch,
        });
    }

    create = async (role_id, grants, parent_roles, branch) => {
        return this.dispatch('/v1/roles', HTTP_METHODS.POST, {
            id: role_id,
            actions_by_resource_type: grants,
            parent_roles: parent_roles,
            branch: branch,
        });
    }

    listUsersetsForRole = async (role_id, branch) => {
        return this.dispatch(`/v1/roles/${role_id}/usersets`, HTTP_METHODS.GET, {
            branch: branch,
        });
    }

    inherit = async (child_role_id, parent_role_id, branch) => {
        return this.dispatch(`/v1/roles/inherit`, HTTP_METHODS.POST, {
            child_role_id: child_role_id,
            parent_role_id: parent_role_id,
            branch: branch,
        });
    }
}

export default Roles;
