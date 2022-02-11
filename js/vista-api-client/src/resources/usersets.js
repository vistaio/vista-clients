
import { HTTP_METHODS, ApiResource } from '../apiResource.js';
import Grants from './grants';

class Usersets extends ApiResource {
    constructor(axiosClient, branch, hostname) {
        super(axiosClient, branch, hostname);
        this.grants = new Grants(axiosClient, branch, hostname);
    }

    create = async (usersetId, orgId, parentUsersets=[]) => {
        return this.dispatch('/v1/usersets', HTTP_METHODS.POST, {
            id: usersetId,
            org_id: orgId,
            parent_usersets: parentUsersets,
            branch: this.branch,
        });
    }

    inherit = async (child_usersetId, parentUsersetId) => {
        return this.dispatch(`/v1/usersets/inherit`, HTTP_METHODS.POST, {
            child_userset_id: child_usersetId,
            parent_userset_id: parentUsersetId,
            branch: this.branch,
        });
    }

    grantAction = async (usersetId, action, resourceId, resourceType, attribute = '') => {
        return this.grants.grant(usersetId, 'USERSET', action, 'ACTION', resourceId, resourceType, attribute);
    }

    revokeAction = async (usersetId, action, resourceId, resourceType, attribute = '') => {
        return this.grants.revoke(usersetId, 'USERSET', action, 'ACTION', resourceId, resourceType, attribute);
    }

    grantRole = async (usersetId, role_id, resourceId, resourceType) => {
        return this.grants.grant(usersetId, 'USERSET', role_id, 'ROLE', resourceId, resourceType, '');
    }

    revokeRole = async (usersetId, role_id, resourceId, resourceType) => {
        return this.grants.revoke(usersetId, 'USERSET', role_id, 'ROLE', resourceId, resourceType, '');
    }
}

export default Usersets;
