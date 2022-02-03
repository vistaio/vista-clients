
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Roles extends ApiResource {
    list = async (orgId='*') => {
        return this.dispatch('/v1/roles', HTTP_METHODS.GET, {
            org_id: orgId,
            branch: this.branch,
        });
    }

    upsert = async (roleId, resourceTypeToAttributeToActions, parentRoles=[], orgId='*') => {
        return this.dispatch('/v1/roles', HTTP_METHODS.POST, {
            id: roleId,
            resource_type_to_attribute_to_actions: resourceTypeToAttributeToActions,
            parent_roles: parentRoles,
            org_id: orgId,
            branch: this.branch,
        });
    }

    inherit = async (childRoleId, parentRoleId, orgId='*') => {
        return this.dispatch(`/v1/roles/inherit`, HTTP_METHODS.POST, {
            child_role_id: childRoleId,
            parent_role_id: parentRoleId,
            org_id: orgId,
            branch: this.branch,
        });
    }
}

export default Roles;
