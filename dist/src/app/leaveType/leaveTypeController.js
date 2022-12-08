"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.LeaveTypeController = void 0;
const employee_1 = require("@entity/employee");
const leaveType_1 = require("@entity/leaveType");
const response_1 = __importDefault(require("src/helper/response"));
const tsoa_1 = require("tsoa");
let LeaveTypeController = class LeaveTypeController extends tsoa_1.Controller {
    getAllLeaveTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leaveTypes = leaveType_1.LeaveType.find();
                return response_1.default.success({ data: leaveTypes });
            }
            catch (error) {
                return error;
            }
        });
    }
    createLeaveType({ code, days, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leaveType = new leaveType_1.LeaveType();
                leaveType.code = code;
                leaveType.days = days;
                leaveType.name = name;
                yield leaveType.save();
                return response_1.default.success({ data: leaveType });
            }
            catch (error) {
                return error;
            }
        });
    }
    updateEmployee(id, { code, days, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leaveType = yield leaveType_1.LeaveType.findOneOrFail({ where: { id } });
                leaveType.code = code !== null && code !== void 0 ? code : leaveType.code;
                leaveType.days = days !== null && days !== void 0 ? days : leaveType.days;
                leaveType.name = name !== null && name !== void 0 ? name : leaveType.name;
                yield leaveType.save();
                return response_1.default.success({ data: leaveType });
            }
            catch (error) {
                return error;
            }
        });
    }
    deleteEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield employee_1.Employee.findOneOrFail({ where: { id } });
                yield employee.remove();
                return response_1.default.success({ data: employee });
            }
            catch (error) {
                return error;
            }
        });
    }
};
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeaveTypeController.prototype, "getAllLeaveTypes", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Post)('/'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeaveTypeController.prototype, "createLeaveType", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Put)('/{id}'),
    __param(0, (0, tsoa_1.Query)('id')),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LeaveTypeController.prototype, "updateEmployee", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Delete)('/{id}'),
    __param(0, (0, tsoa_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeaveTypeController.prototype, "deleteEmployee", null);
LeaveTypeController = __decorate([
    (0, tsoa_1.Tags)('Employee'),
    (0, tsoa_1.Route)('/api/leave-type')
], LeaveTypeController);
exports.LeaveTypeController = LeaveTypeController;
