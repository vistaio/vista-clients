
import { AxiosInstance } from 'axios';
import { HttpMethods, ApiResource } from '../apiResource.js';
import Grants from './Grants';

class Usersets extends ApiResource {
    grants: Grants;

    constructor(axiosClient: AxiosInstance, branch: string, hostname: string) {
        super(axiosClient, branch, hostname);
        this.grants = new Grants(axiosClient, branch, hostname);
    }

    create = async (usersetId: string, orgId: string, parentUsersets=[]) => {
        return this.dispatch('/v1/usersets', HttpMethods.POST, {
            id: usersetId,
            org_id: orgId,
            parent_usersets: parentUsersets,
            branch: this.branch,
        });
    }

    inherit = async (childUsersetId: string, parentUsersetId: string) => {
        return this.dispatch(`/v1/usersets/inherit`, HttpMethods.POST, {
            child_userset_id: childUsersetId,
            parent_userset_id: parentUsersetId,
            branch: this.branch,
        });
    }

    grantAction = async (usersetId: string, action: string, resourceId: string, resourceType: string, attribute = '') => {
        return this.grants.grant(usersetId, 'USERSET', action, 'ACTION', resourceId, resourceType, attribute);
    }

    revokeAction = async (usersetId: string, action: string, resourceId: string, resourceType: string, attribute = '') => {
        return this.grants.revoke(usersetId, 'USERSET', action, 'ACTION', resourceId, resourceType, attribute);
    }

    grantRole = async (usersetId: string, role_id: string, resourceId: string, resourceType: string) => {
        return this.grants.grant(usersetId, 'USERSET', role_id, 'ROLE', resourceId, resourceType, '');
    }

    revokeRole = async (usersetId: string, role_id: string, resourceId: string, resourceType: string) => {
        return this.grants.revoke(usersetId, 'USERSET', role_id, 'ROLE', resourceId, resourceType, '');
    }
}

export default Usersets;
