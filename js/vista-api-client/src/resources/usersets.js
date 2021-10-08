
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Usersets extends ApiResource {
    create = async (userset_id, parent_usersets, branch) => {
        return this.dispatch('/v1/usersets', HTTP_METHODS.POST, {
            id: userset_id,
            parent_usersets: parent_usersets,
            branch: branch,
        });
    }

    inherit = async (child_userset_id, parent_userset_id, branch) => {
        return this.dispatch(`/v1/usersets/inherit`, HTTP_METHODS.POST, {
            child_userset_id: child_userset_id,
            parent_userset_id: parent_userset_id,
            branch: branch,
        });
    }

    listForRole = async (role_id, branch) => {
        return this.dispatch(`/v1/roles/${role_id}/usersets`, HTTP_METHODS.GET, {
            branch: branch,
        });
    }

    grantAction = async (userset_id, action, resource_type, resource_id, branch) => {
        return this.dispatch('/v1/usersets/grantAction', HTTP_METHODS.POST, {
            id: userset_id,
            action: action,
            resource_type: resource_type,
            resource_id: resource_id,
            branch: branch,
        });
    }

    grantRole = async (userset_id, role_id, resource_type, resource_id, branch) => {
        return this.dispatch('/v1/usersets/grantRole', HTTP_METHODS.POST, {
            id: userset_id,
            role_id: role_id,
            resource_type: resource_type,
            resource_id: resource_id,
            branch: branch,
        });
    }
}

export default Usersets;
