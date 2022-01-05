
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Usersets extends ApiResource {
    create = async (usersetId, parentUsersets) => {
        return this.dispatch('/v1/usersets', HTTP_METHODS.POST, {
            id: usersetId,
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

    grantAction = async (usersetId, action, resourceType, resourceId) => {
        return this.dispatch('/v1/grants', HTTP_METHODS.POST, {
            id: usersetId,
            subject_type: 'USERSET',
            relation: action,
            relation_type: 'ACTION',
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    revokeAction = async (usersetId, action, resourceType, resourceId) => {
        return this.dispatch('/v1/grants', HTTP_METHODS.DELETE, {
            id: usersetId,
            subject_type: 'USERSET',
            relation: action,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    grantRole = async (usersetId, role_id, resourceType, resourceId) => {
        return this.dispatch('/v1/grants', HTTP_METHODS.POST, {
            id: usersetId,
            subject_type: 'USERSET',
            relation: role_id,
            relation_type: 'ROLE',
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    revokeRole = async (usersetId, role_id, resourceType, resourceId) => {
        return this.dispatch('/v1/grants', HTTP_METHODS.DELETE, {
            id: usersetId,
            subject_type: 'USERSET',
            relation: role_id,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }
}

export default Usersets;
