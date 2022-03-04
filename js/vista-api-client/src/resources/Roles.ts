
import { HttpMethods, ApiResource } from '../apiResource.js';

interface ResourceTypeToAttributeToActions {
    [resourceType: string] : {
        [attribute: string ]: string[]
    }
};

class Roles extends ApiResource {
    list = async (orgId='*') => {
        return this.dispatch('/v1/roles', HttpMethods.GET, {
            org_id: orgId,
            branch: this.branch,
        });
    }

    upsert = async (roleId: string, resourceTypeToAttributeToActions: ResourceTypeToAttributeToActions, parentRoles: string[] = [], orgId='*') => {
        return this.dispatch('/v1/roles', HttpMethods.POST, {
            id: roleId,
            resource_type_to_attribute_to_actions: resourceTypeToAttributeToActions,
            parent_roles: parentRoles,
            org_id: orgId,
            branch: this.branch,
        });
    }
}

export default Roles;
