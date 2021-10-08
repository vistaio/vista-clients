
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class ResourceTypes extends ApiResource {
    list = async (branch) => {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.GET, {
            branch: branch,
        });
    }

    create = async (name, relationships, attributes, actions, branch) => {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.POST, {
            name: name,
            relationships: relationships,
            attributes: attributes,
            actions: actions,
            branch: branch,
        });
    }
}

export default ResourceTypes;
