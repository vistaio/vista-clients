
import { HTTP_METHODS, ApiResource } from '../apiResource.js';

class ResourceTypes extends ApiResource {
    async list(environment) {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.GET, {
            environment: environment,
        });
    }

    async create(name, relationships, attributes, actions, environment) {
        return this.dispatch('/v1/resource_types', HTTP_METHODS.POST, {
            name: name,
            relationships: relationships,
            attributes: attributes,
            actions: actions,
            environment: environment,
        });
    }
}

export default ResourceTypes;
