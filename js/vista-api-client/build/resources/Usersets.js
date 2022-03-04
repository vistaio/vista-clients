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
class Usersets extends apiResource_js_1.ApiResource {
    constructor(axiosClient, branch, hostname) {
        super(axiosClient, branch, hostname);
        this.create = (usersetId, orgId, parentUsersets = []) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/usersets', apiResource_js_1.HttpMethods.POST, {
                id: usersetId,
                org_id: orgId,
                parent_usersets: parentUsersets,
                branch: this.branch,
            });
        });
        this.inherit = (childUsersetId, parentUsersetId) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch(`/v1/usersets/inherit`, apiResource_js_1.HttpMethods.POST, {
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
        this.grants = new Grants_1.default(axiosClient, branch, hostname);
    }
}
exports.default = Usersets;
//# sourceMappingURL=Usersets.js.map