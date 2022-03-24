import { AxiosInstance } from 'axios';
import { ApiResource } from '../ApiResource';
import Grants from './Grants';
declare class Usersets extends ApiResource {
    grants: Grants;
    constructor(axiosClient: AxiosInstance, branch: string, hostname: string);
    create: (usersetId: string, orgId: string, parentUsersets?: never[]) => Promise<any>;
    inherit: (childUsersetId: string, parentUsersetId: string) => Promise<any>;
    grantAction: (usersetId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    revokeAction: (usersetId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    grantRole: (usersetId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
    revokeRole: (usersetId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
}
export default Usersets;
