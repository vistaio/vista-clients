import { AxiosInstance } from 'axios';

declare enum HttpMethods {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE"
}
declare class ApiResource {
    axiosClient: AxiosInstance;
    branch: string;
    hostname: string;
    constructor(axiosClient: AxiosInstance, branch: string, hostname: string);
    dispatch: (url: string, method: HttpMethods, data?: {}) => Promise<any>;
}

declare class Admin extends ApiResource {
    getCompany: () => Promise<any>;
    createBranch: (branch: string) => Promise<any>;
    cloneBranch: (branch: string, newBranch: string) => Promise<any>;
    createReadTokens: () => Promise<any>;
}

declare class Grants extends ApiResource {
    list: (userId: string | null, action: string | null, resourceId: string | null, resourceType: string | null, attribute: string | null, orgId: string | null, startTime: Date | null, endTime: Date | null) => Promise<any>;
    expand: (userId: string) => Promise<any>;
    grant: (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => Promise<any>;
    revoke: (userId: string, subjectType: string, relation: string, relationType: string, resourceId: string, resourceType: string, attribute: string) => Promise<any>;
    listUnflattened: (usersetId: string | null, relation: string | null, relationType: string | null, resourceId: string | null, resourceType: string | null, attribute: string | null, orgId: string | null) => Promise<any>;
}

declare class ResourceTypes extends ApiResource {
    list: () => Promise<any>;
    upsert: (name: string, actions: string[], attributes?: never[]) => Promise<any>;
    addRelationship: (fromId: string, fromResourceType: string, attribute: string, toId: string, toResourceType: string) => Promise<any>;
}

interface Permission {
    resourceType: string;
    attribute: string;
    action: string;
}
declare class Roles extends ApiResource {
    list: (orgId?: string) => Promise<any>;
    upsert: (roleId: string, permissions: Permission[], parentRoles?: string[], orgId?: string) => Promise<any>;
}

declare class Users extends ApiResource {
    grants: Grants;
    constructor(axiosClient: AxiosInstance, branch: string, hostname: string);
    create: (userId: string, orgId: string) => Promise<any>;
    list: (userId: string, orgId?: string) => Promise<any>;
    assignToUserset: (userId: string, usersetId: string) => Promise<any>;
    removeFromUserset: (userId: string, usersetId: string) => Promise<any>;
    check: (userId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    expand: (userId: string) => Promise<any>;
    grantAction: (userId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    revokeAction: (userId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    grantRole: (userId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
    revokeRole: (userId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
}

declare class Usersets extends ApiResource {
    grants: Grants;
    constructor(axiosClient: AxiosInstance, branch: string, hostname: string);
    create: (usersetId: string, orgId: string, parentUsersets?: never[]) => Promise<any>;
    inherit: (childUsersetId: string, parentUsersetId: string) => Promise<any>;
    grantAction: (usersetId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    revokeAction: (usersetId: string, action: string, resourceId: string, resourceType: string, attribute?: string) => Promise<any>;
    grantRole: (usersetId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
    revokeRole: (usersetId: string, role_id: string, resourceId: string, resourceType: string) => Promise<any>;
}

declare class VistaClient {
    static ALL: string;
    secret: string;
    axios: AxiosInstance;
    hostname: string;
    admin: Admin;
    grants: Grants;
    resourceTypes: ResourceTypes;
    roles: Roles;
    users: Users;
    usersets: Usersets;
    constructor(secret: string, branch: string, hostname: string);
}

export { VistaClient as default };
