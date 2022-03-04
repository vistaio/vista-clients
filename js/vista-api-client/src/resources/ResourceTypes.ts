
import { HttpMethods, ApiResource } from '../ApiResource';

class ResourceTypes extends ApiResource {
    list = async () => {
        return this.dispatch('/v1/resource_types', HttpMethods.GET, {
            branch: this.branch,
        });
    }

    upsert = async (name: string, actions: string[], attributes=[]) => {
        return this.dispatch('/v1/resource_types', HttpMethods.POST, {
            name: name,
            actions: actions,
            attributes: attributes,
            branch: this.branch,
        });
    }

    addRelationship = async (fromId: string, fromResourceType: string, attribute: string, toId: string, toResourceType: string) => {
        return this.dispatch('/v1/resource_types/relationships', HttpMethods.POST, {
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
