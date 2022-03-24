import { ApiResource } from '../ApiResource';
declare class ResourceTypes extends ApiResource {
    list: () => Promise<any>;
    upsert: (name: string, actions: string[], attributes?: never[]) => Promise<any>;
    addRelationship: (fromId: string, fromResourceType: string, attribute: string, toId: string, toResourceType: string) => Promise<any>;
}
export default ResourceTypes;
