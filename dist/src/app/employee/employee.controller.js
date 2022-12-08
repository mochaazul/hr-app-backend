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
exports.EmployeeController = void 0;
const employee_1 = require("@entity/employee");
const employeLeave_1 = require("@entity/employeLeave");
const leaveRecord_1 = require("@entity/leaveRecord");
const leaveType_1 = require("@entity/leaveType");
const errorTypes_1 = require("src/constants/errorTypes");
const response_1 = __importDefault(require("src/helper/response"));
const dayjs_1 = __importDefault(require("dayjs"));
const tsoa_1 = require("tsoa");
let EmployeeController = class EmployeeController extends tsoa_1.Controller {
    getAllEmployee() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield employee_1.Employee.find({ relations: ['leaves'] });
                return response_1.default.success({ data: employees });
            }
            catch (error) {
                return error;
            }
        });
    }
    getEmployeLeaveStats(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = employee_1.Employee.findOneOrFail(id);
                return response_1.default.success({ data: employees });
            }
            catch (error) {
                return error;
            }
        });
    }
    addLeave({ id, leave_type_id, start_date, duration }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employeeLeaveStats = yield employeLeave_1.EmployeeLeave.findOneOrFail({ where: { employee_id: id } });
                const leaveType = yield leaveType_1.LeaveType.findOneOrFail(leave_type_id);
                if (employeeLeaveStats.available_leave < duration)
                    throw errorTypes_1.E_ERROR.INSUFFICIENT_LEAVE_AMOUNT;
                employeeLeaveStats.taken_leave += duration;
                const end_date = new Date((0, dayjs_1.default)(start_date).add(duration, 'day')
                    .format('DD-MM-YYY'));
                const leaveRecord = new leaveRecord_1.LeaveRecord();
                leaveRecord.employe_leave = employeeLeaveStats;
                leaveRecord.leave_type = leaveType;
                leaveRecord.start_date = start_date;
                leaveRecord.end_date = end_date;
                yield leaveRecord.save();
                return response_1.default.success({ data: employeeLeaveStats });
            }
            catch (error) {
                return error;
            }
        });
    }
    createEmployee(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = new employee_1.Employee();
                employee.birth_date = body.birth_date;
                employee.employment_date = body.employement_date;
                employee.name = body.name;
                employee.phone_number = body.phone_number;
                return response_1.default.success({ data: employee });
            }
            catch (error) {
                return error;
            }
        });
    }
    updateEmployee(id, body) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield employee_1.Employee.findOneOrFail({ where: { id } });
                employee.birth_date = (_a = body.birth_date) !== null && _a !== void 0 ? _a : employee.birth_date;
                employee.employment_date = (_b = body.employement_date) !== null && _b !== void 0 ? _b : employee.employment_date;
                employee.noInduk = (_c = body.noInduk) !== null && _c !== void 0 ? _c : employee.noInduk;
                employee.phone_number = (_d = body.phone_number) !== null && _d !== void 0 ? _d : employee.phone_number;
                yield employee.save();
                return response_1.default.success({ data: employee });
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
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getAllEmployee", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Get)('/leave-stats/{id}'),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getEmployeLeaveStats", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Post)('/add-leave'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "addLeave", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Post)('/'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "createEmployee", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Put)('/{id}'),
    __param(0, (0, tsoa_1.Query)('id')),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "updateEmployee", null);
__decorate([
    (0, tsoa_1.Security)('api_key'),
    (0, tsoa_1.Delete)('/{id}'),
    __param(0, (0, tsoa_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "deleteEmployee", null);
EmployeeController = __decorate([
    (0, tsoa_1.Tags)('Employee'),
    (0, tsoa_1.Route)('/api/employee')
], EmployeeController);
exports.EmployeeController = EmployeeController;
