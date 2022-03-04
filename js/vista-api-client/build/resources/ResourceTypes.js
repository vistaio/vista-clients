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
class ResourceTypes extends apiResource_js_1.ApiResource {
    constructor() {
        super(...arguments);
        this.list = () => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/resource_types', apiResource_js_1.HttpMethods.GET, {
                branch: this.branch,
            });
        });
        this.upsert = (name, actions, attributes = []) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/resource_types', apiResource_js_1.HttpMethods.POST, {
                name: name,
                actions: actions,
                attributes: attributes,
                branch: this.branch,
            });
        });
        this.addRelationship = (fromId, fromResourceType, attribute, toId, toResourceType) => __awaiter(this, void 0, void 0, function* () {
            return this.dispatch('/v1/resource_types/relationships', apiResource_js_1.HttpMethods.POST, {
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
exports.default = ResourceTypes;
//# sourceMappingURL=ResourceTypes.js.map