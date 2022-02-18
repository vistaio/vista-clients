
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class ResourceTypes extends ApiResource {
    list = async () => {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.GET, {
            branch: this.branch,
        });
    }

    upsert = async (name, actions, attributes=[]) => {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.POST, {
            name: name,
            actions: actions,
            attributes: attributes,
            branch: this.branch,
        });
    }

    addRelationship = async (fromId, fromResourceType, attribute, toId, toResourceType) => {
        return this.dispatch('/v1/resource_types/relationships', HTTP_METHODS.POST, {
            'from_id': fromId,
            'from_resource_type': fromResourceType,
            'attribute': attribute,
            'to_id': toId,
            'to_resource_type': toResourceType,
            'branch': this.branch,
        });
    }
}

export default ResourceTypes;
