"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiResource_js_1 = require("../apiResource.js");
class Grants extends apiResource_js_1.ApiResource {
    constructor() {
        super(...arguments);
        this.list = (userId, action, resourceId, resourceType, attribute, orgId) => __awaiter(this, void 0, void 0, function* () {
            userId = userId || '';
            action = action || '';
            resourceId = resourceId || '';
            resourceType = resourceType || '';
            attribute = attribute || '';
            orgId = orgId || '';
            return this.dispatch('/v1/grants', apiResource_js_1.HttpMethods.GET, {
                id: userId,
                action: action,
                resource_type: resourceType,
                resource_id: resourceId,
                attribute: attribute,
                org_id: orgId,
                branch: this.branch,
            });
        });
        this.expand = (userId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants', apiResource_js_1.HttpMethods.GET, {
                id: userId,
                branch: this.branch,
            });
        });
        this.grant = (userId, subjectType, relation, relationType, resourceId, resourceType, attribute) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants', apiResource_js_1.HttpMethods.POST, {
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
            return this.dispatch('/v1/grants', apiResource_js_1.HttpMethods.DELETE, {
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
        this.listUnflattened = (orgId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/grants/unflattened', apiResource_js_1.HttpMethods.GET, {
                org_id: orgId,
                branch: this.branch,
            });
        });
    }
}
exports.default = Grants;
//# sourceMappingURL=Grants.js.map