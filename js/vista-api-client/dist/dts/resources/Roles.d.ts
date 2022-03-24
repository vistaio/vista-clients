import { ApiResource } from '../ApiResource';
interface ResourceTypeToAttributeToActions {
    [resourceType: string]: {
        [attribute: string]: string[];
    };
}
declare class Roles extends ApiResource {
    list: (orgId?: string) => Promise<any>;
    upsert: (roleId: string, resourceTypeToAttributeToActions: ResourceTypeToAttributeToActions, parentRoles?: string[], orgId?: string) => Promise<any>;
}
export default Roles;
