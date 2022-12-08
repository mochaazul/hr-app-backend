"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissionService = exports.RolesService = exports.EmployeeService = exports.AuthorizationService = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var OpenAPI_1 = require("./core/OpenAPI");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return OpenAPI_1.OpenAPI; } });
var AuthorizationService_1 = require("./services/AuthorizationService");
Object.defineProperty(exports, "AuthorizationService", { enumerable: true, get: function () { return AuthorizationService_1.AuthorizationService; } });
var EmployeeService_1 = require("./services/EmployeeService");
Object.defineProperty(exports, "EmployeeService", { enumerable: true, get: function () { return EmployeeService_1.EmployeeService; } });
var RolesService_1 = require("./services/RolesService");
Object.defineProperty(exports, "RolesService", { enumerable: true, get: function () { return RolesService_1.RolesService; } });
var UserPermissionService_1 = require("./services/UserPermissionService");
Object.defineProperty(exports, "UserPermissionService", { enumerable: true, get: function () { return UserPermissionService_1.UserPermissionService; } });
