import { ApiResource } from '../ApiResource';
declare class Grants extends ApiResource {
    list: (userId: string, action: string, resourceId: string, resourceType: string, attribute: string, orgId: string) => Promise<any>;
    expand: (userId: string) => Promise<any>;
    grant: (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => Promise<any>;
    revoke: (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => Promise<any>;
    listUnflattened: (orgId: string) => Promise<any>;
}
export default Grants;
