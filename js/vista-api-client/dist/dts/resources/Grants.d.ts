import { ApiResource } from '../ApiResource';
declare class Grants extends ApiResource {
    list: (userId: string | null, action: string | null, resourceId: string | null, resourceType: string | null, attribute: string | null, orgId: string | null, startTime: Date | null, endTime: Date | null) => Promise<any>;
    expand: (userId: string) => Promise<any>;
    grant: (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => Promise<any>;
    revoke: (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => Promise<any>;
    listUnflattened: (orgId: string) => Promise<any>;
}
export default Grants;
