'use strict';

var Axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Axios__default = /*#__PURE__*/_interopDefaultLegacy(Axios);

var config = {
    VistaAPIHostname: 'https://api.govista.io',
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var HttpMethods;
(function (HttpMethods) {
    HttpMethods["GET"] = "GET";
    HttpMethods["POST"] = "POST";
    HttpMethods["DELETE"] = "DELETE";
})(HttpMethods || (HttpMethods = {}));
class ApiResource {
    constructor(axiosClient, branch, hostname) {
        this.dispatch = (url, method, data = {}) => __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: new URL(url, this.hostname).href,
                method: method,
                data: {},
            };
            if (data) {
                if (method === HttpMethods.GET) {
                    config.url = `${config.url}?${new URLSearchParams(data)}`;
                }
                else {
                    config.data = data;
                }
            }
            const resp = yield this.axiosClient.request(config).catch((error) => {
                if (error.response) {
                    throw Error(error.response.data.message);
                }
                else if (error.request) {
                    throw Error('There was a problem with the request');
                }
                else {
                    throw error;
                }
            });
            if (!resp) {
                throw Error('There was a problem with the request');
            }
            if (resp.status === 204) {
                return {};
            }
            return resp.data.data;
        });
        this.axiosClient = axiosClient;
        this.branch = branch;
        this.hostname = hostname;
    }
}

class Admin extends ApiResource {
    constructor() {
        super(...arguments);
        this.getCompany = () => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/accounts', HttpMethods.GET);
        });
        this.createBranch = (branch) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/companies/branches', HttpMethods.POST, {
                branch: branch,
            });
        });
        this.cloneBranch = (branch, newBranch) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/companies/branches', HttpMethods.POST, {
                branch: branch,
                new_branch: newBranch,
            });
        });
        this.createReadTokens = () => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/auth/readTokens', HttpMethods.GET);
        });
    }
}

class Grants extends ApiResource {
    constructor() {
        super(...arguments);
        this.list = (userId, action, resourceId, resourceType, attribute, orgId, startTime, endTime) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants', HttpMethods.GET, {
                id: userId || '',
                action: action || '',
                resource_id: resourceId || '',
                resource_type: resourceType || '',
                attribute: attribute || '',
                org_id: orgId || '',
                start_time: startTime ? startTime.toISOString() : '',
                end_time: endTime ? endTime.toISOString() : '',
                branch: this.branch,
            });
        });
        this.expand = (userId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants', HttpMethods.GET, {
                id: userId,
                branch: this.branch,
            });
        });
        this.grant = (userId, subjectType, relation, relationType, resourceId, resourceType, attribute) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants', HttpMethods.POST, {
                id: userId,
                subject_type: subjectType,
                relation: relation,
                relation_type: relationType,
                resource_type: resourceType,
                resource_id: resourceId,
                attribute: attribute,
                branch: this.branch,
            });
        });
        this.revoke = (userId, subjectType, relation, relationType, resourceId, resourceType, attribute) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants', HttpMethods.DELETE, {
                id: userId,
                subject_type: subjectType,
                relation: relation,
                relation_type: relationType,
                resource_id: resourceId,
                resource_type: resourceType,
                attribute: attribute,
                branch: this.branch,
            });
        });
        this.listUnflattened = (usersetId, relation, relationType, resourceId, resourceType, attribute, orgId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants/unflattened', HttpMethods.GET, {
                usersetId: usersetId || '',
                relation: relation || '',
                relationType: relationType || '',
                resourceId: resourceId || '',
                resourceType: resourceType || '',
                attribute: attribute || '',
                orgId: orgId || '',
                branch: this.branch,
            });
        });
    }
}

class ResourceTypes extends ApiResource {
    constructor() {
        super(...arguments);
        this.list = () => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/resource_types', HttpMethods.GET, {
                branch: this.branch,
            });
        });
        this.upsert = (name, actions, attributes = []) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/resource_types', HttpMethods.POST, {
                name: name,
                actions: actions,
                attributes: attributes,
                branch: this.branch,
            });
        });
        this.addRelationship = (fromId, fromResourceType, attribute, toId, toResourceType) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/resource_types/relationships', HttpMethods.POST, {
                'from_id': fromId,
                'from_resource_type': fromResourceType,
                'attribute': attribute,
                'to_id': toId,
                'to_resource_type': toResourceType,
                'branch': this.branch,
            });
        });
    }
}

class Roles extends ApiResource {
    constructor() {
        super(...arguments);
        this.list = (orgId = '*') => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/roles', HttpMethods.GET, {
                org_id: orgId,
                branch: this.branch,
            });
        });
        this.upsert = (roleId, permissions, parentRoles = [], orgId = '*') => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/roles', HttpMethods.POST, {
                id: roleId,
                permissions,
                parent_roles: parentRoles,
                org_id: orgId,
                branch: this.branch,
            });
        });
    }
}

class Users extends ApiResource {
    constructor(axiosClient, branch, hostname) {
        super(axiosClient, branch, hostname);
        this.create = (userId, orgId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users', HttpMethods.POST, {
                id: userId,
                org_id: orgId,
                branch: this.branch,
            });
        });
        this.list = (userId, orgId = '') => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users', HttpMethods.GET, {
                id: userId,
                org_id: orgId,
                branch: this.branch,
            });
        });
        this.assignToUserset = (userId, usersetId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users/assign', HttpMethods.POST, {
                id: userId,
                userset_id: usersetId,
                branch: this.branch,
            });
        });
        this.removeFromUserset = (userId, usersetId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users/removeFromUserset', HttpMethods.POST, {
                id: userId,
                userset_id: usersetId,
                branch: this.branch,
            });
        });
        this.check = (userId, action, resourceId, resourceType, attribute = '') => __awaiter(this, void 0, void 0, function* () {
            return this.grants.list(userId, action, resourceId, resourceType, attribute, '', null, null);
        });
        this.expand = (userId) => __awaiter(this, void 0, void 0, function* () {
            return this.grants.expand(userId);
        });
        this.grantAction = (userId, action, resourceId, resourceType, attribute = '') => __awaiter(this, void 0, void 0, function* () {
            return this.grants.grant(userId, 'USER', action, 'ACTION', resourceId, resourceType, attribute);
        });
        this.revokeAction = (userId, action, resourceId, resourceType, attribute = '') => __awaiter(this, void 0, void 0, function* () {
            return this.grants.revoke(userId, 'USER', action, 'ACTION', resourceId, resourceType, attribute);
        });
        this.grantRole = (userId, role_id, resourceId, resourceType) => __awaiter(this, void 0, void 0, function* () {
            return this.grants.grant(userId, 'USER', role_id, 'ROLE', resourceId, resourceType, '');
        });
        this.revokeRole = (userId, role_id, resourceId, resourceType) => __awaiter(this, void 0, void 0, function* () {
            return this.grants.revoke(userId, 'USER', role_id, 'ROLE', resourceId, resourceType, '');
        });
        this.grants = new Grants(axiosClient, branch, hostname);
    }
}

class Usersets extends ApiResource {
    constructor(axiosClient, branch, hostname) {
        super(axiosClient, branch, hostname);
        this.create = (usersetId, orgId, parentUsersets = []) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/usersets', HttpMethods.POST, {
                id: usersetId,
                org_id: orgId,
                parent_usersets: parentUsersets,
                branch: this.branch,
            });
        });
        this.inherit = (childUsersetId, parentUsersetId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(`/v1/usersets/inherit`, HttpMethods.POST, {
                child_userset_id: childUsersetId,
                parent_userset_id: parentUsersetId,
                branch: this.branch,
            });
        });
        this.grantAction = (usersetId, action, resourceId, resourceType, attribute = '') => __awaiter(this, void 0, void 0, function* () {
            return this.grants.grant(usersetId, 'USERSET', action, 'ACTION', resourceId, resourceType, attribute);
        });
        this.revokeAction = (usersetId, action, resourceId, resourceType, attribute = '') => __awaiter(this, void 0, void 0, function* () {
            return this.grants.revoke(usersetId, 'USERSET', action, 'ACTION', resourceId, resourceType, attribute);
        });
        this.grantRole = (usersetId, role_id, resourceId, resourceType) => __awaiter(this, void 0, void 0, function* () {
            return this.grants.grant(usersetId, 'USERSET', role_id, 'ROLE', resourceId, resourceType, '');
        });
        this.revokeRole = (usersetId, role_id, resourceId, resourceType) => __awaiter(this, void 0, void 0, function* () {
            return this.grants.revoke(usersetId, 'USERSET', role_id, 'ROLE', resourceId, resourceType, '');
        });
        this.grants = new Grants(axiosClient, branch, hostname);
    }
}

class VistaClient {
    constructor(secret, branch, hostname) {
        this.secret = secret;
        this.axios = Axios__default["default"].create({
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${secret}`,
            },
        });
        this.hostname = hostname || config.VistaAPIHostname;
        this.admin = new Admin(this.axios, branch, this.hostname);
        this.grants = new Grants(this.axios, branch, this.hostname);
        this.resourceTypes = new ResourceTypes(this.axios, branch, this.hostname);
        this.roles = new Roles(this.axios, branch, this.hostname);
        this.users = new Users(this.axios, branch, this.hostname);
        this.usersets = new Usersets(this.axios, branch, this.hostname);
    }
}
VistaClient.ALL = '*';

module.exports = VistaClient;
//# sourceMappingURL=vista.cjs.map
