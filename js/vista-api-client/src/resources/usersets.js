
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
        return this.dispatch('/v1/usersets/grantAction', HTTP_METHODS.POST, {
            id: usersetId,
            action: action,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }

    grantRole = async (usersetId, role_id, resourceType, resourceId) => {
        return this.dispatch('/v1/usersets/grantRole', HTTP_METHODS.POST, {
            id: usersetId,
            role_id: role_id,
            resource_type: resourceType,
            resource_id: resourceId,
            branch: this.branch,
        });
    }
}

export default Usersets;
