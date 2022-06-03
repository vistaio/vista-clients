import { AxiosInstance } from 'axios';
import { ApiResource } from '../ApiResource';
import Grants from './Grants';
declare class Users extends ApiResource {
    grants: Grants;
    constructor(axiosClient: AxiosInstance, branch: string, hostname: string);
    create: (userId: string, orgId: string) => Promise<any>;
    list: (orgId?: string) => Promise<any>;
    listOrgs: () => Promise<any>;
    assignToUserset: (userId: string, usersetId: string) => Promise<any>;
    removeFromUserset: (userId: string, usersetId: string) => Promise<any>;
    check: (userId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    expand: (userId: string) => Promise<any>;
    grantAction: (userId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    revokeAction: (userId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    grantRole: (userId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
    revokeRole: (userId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
}
export default Users;
