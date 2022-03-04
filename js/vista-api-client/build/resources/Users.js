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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiResource_js_1 = require("../apiResource.js");
const Grants_1 = __importDefault(require("./Grants"));
class Users extends apiResource_js_1.ApiResource {
    constructor(axiosClient, branch, hostname) {
        super(axiosClient, branch, hostname);
        this.create = (userId, orgId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users', apiResource_js_1.HttpMethods.POST, {
                id: userId,
                org_id: orgId,
                branch: this.branch,
            });
        });
        this.list = (userId, orgId = '') => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users', apiResource_js_1.HttpMethods.GET, {
                id: userId,
                org_id: orgId,
                branch: this.branch,
            });
        });
        this.assignToUserset = (userId, usersetId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users/assign', apiResource_js_1.HttpMethods.POST, {
                id: userId,
                userset_id: usersetId,
                branch: this.branch,
            });
        });
        this.removeFromUserset = (userId, usersetId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/users/removeFromUserset', apiResource_js_1.HttpMethods.POST, {
                id: userId,
                userset_id: usersetId,
                branch: this.branch,
            });
        });
        this.check = (userId, action, resourceId, resourceType, attribute = '') => __awaiter(this, void 0, void 0, function* () {
            return this.grants.list(userId, action, resourceId, resourceType, attribute, '');
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
        this.grants = new Grants_1.default(axiosClient, branch, hostname);
    }
}
exports.default = Users;
//# sourceMappingURL=Users.js.map