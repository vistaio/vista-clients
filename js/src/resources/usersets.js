
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class Usersets extends ApiResource {
    async create(userset_id, role_id, parent_usersets, environment) {
        return this.dispatch('/v1/usersets', HTTP_METHODS.POST, {
            id: userset_id,
            role_id: role_id,
            parent_usersets: parent_usersets,
            environment: environment,
        });
    }

    async inherit(child_userset_id, parent_userset_id, environment) {
        return this.dispatch(`/v1/usersets/inherit`, HTTP_METHODS.POST, {
            child_userset_id: child_userset_id,
            parent_userset_id: parent_userset_id,
            environment: environment,
        });
    }

    async listForRole(role_id, environment) {
        return this.dispatch(`/v1/roles/${role_id}/usersets`, HTTP_METHODS.GET, {
            environment: environment,
        });
    }

    async grant(userset_id, action, resource_type, resource_id, environment) {
        return this.dispatch('/v1/usersets/grant', HTTP_METHODS.POST, {
            id: userset_id,
            action: action,
            resource_type: resource_type,
            resource_id: resource_id,
            environment: environment,
        });
    }
}

export default Usersets;
