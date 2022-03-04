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
;
class Roles extends apiResource_js_1.ApiResource {
    constructor() {
        super(...arguments);
        this.list = (orgId = '*') => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/roles', apiResource_js_1.HttpMethods.GET, {
                org_id: orgId,
                branch: this.branch,
            });
        });
        this.upsert = (roleId, resourceTypeToAttributeToActions, parentRoles = [], orgId = '*') => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/roles', apiResource_js_1.HttpMethods.POST, {
                id: roleId,
                resource_type_to_attribute_to_actions: resourceTypeToAttributeToActions,
                parent_roles: parentRoles,
                org_id: orgId,
                branch: this.branch,
            });
        });
    }
}
exports.default = Roles;
//# sourceMappingURL=Roles.js.map