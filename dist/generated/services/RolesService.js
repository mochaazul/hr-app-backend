"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RolesService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    static getAllRoles() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/roles',
        });
    }
}
exports.RolesService = RolesService;
