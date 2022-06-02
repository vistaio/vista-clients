
import { HttpMethods, ApiResource } from '../ApiResource';

interface Permission {
    resourceType: string,
    attribute: string,
    action: string,
}

class Roles extends ApiResource {
    list = async (orgId = '*') => {
        return this.dispatch('/v1/roles', HttpMethods.GET, {
            org_id: orgId,
            branch: this.branch,
        });
    }

    upsert = async (roleId: string, permissions: Permission[], owners: { [key: string]: string }, parentRoles: string[] = [], orgId = '*') => {
        return this.dispatch('/v1/roles', HttpMethods.POST, {
            id: roleId,
            permissions,
            parent_roles: parentRoles,
            owners: owners,
            org_id: orgId,
            branch: this.branch,
        });
    }
}

export default Roles;
