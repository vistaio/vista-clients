import { ApiResource } from '../ApiResource';
interface Permission {
    resourceType: string;
    attribute: string;
    action: string;
}
declare class Roles extends ApiResource {
    list: (orgId?: string) => Promise<any>;
    upsert: (roleId: string, permissions: Permission[], parentRoles?: string[], orgId?: string) => Promise<any>;
}
export default Roles;
