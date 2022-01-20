
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Roles extends ApiResource {
    list = async () => {
        return this.dispatch('/v1/roles', HTTP_METHODS.GET, {
            branch: this.branch,
        });
    }

    upsert = async (roleId, resourceTypeToAttributeToActions, parentRoles) => {
        return this.dispatch('/v1/roles', HTTP_METHODS.POST, {
            id: roleId,
            resource_type_to_attribute_to_actions: resourceTypeToAttributeToActions,
            parent_roles: parentRoles,
            branch: this.branch,
        });
    }

    inherit = async (childRoleId, parentRoleId) => {
        return this.dispatch(`/v1/roles/inherit`, HTTP_METHODS.POST, {
            child_role_id: childRoleId,
            parent_role_id: parentRoleId,
            branch: this.branch,
        });
    }
}

export default Roles;
