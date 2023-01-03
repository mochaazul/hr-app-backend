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
exports.TrackerController = void 0;
const employee_1 = require("@entity/employee");
const lodash_1 = __importDefault(require("lodash"));
const errorTypes_1 = require("src/constants/errorTypes");
const response_1 = __importDefault(require("src/helper/response"));
const tsoa_1 = require("tsoa");
let TrackerController = class TrackerController extends tsoa_1.Controller {
    getTracker(period) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!period)
                    throw errorTypes_1.E_ERROR.BAD_REQUEST;
                const employees = yield employee_1.Employee.find({ relations: ['leaves', 'leaves.records'] });
                const filteredEmployees = employees.map(employee => {
                    const formattedEmployee = lodash_1.default.omit(employee, 'leaves');
                    const leaveData = employee.leaves.find(leave => leave.period === period);
                    if (!leaveData)
                        throw errorTypes_1.E_ERROR.NO_PERIOD_SPECIFIED;
                    const formattedLeaveData = lodash_1.default.omit(leaveData, ['employee_id']);
                    return Object.assign(Object.assign({}, formattedEmployee), formattedLeaveData);
                });
                return response_1.default.success({ data: filteredEmployees });
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
};
__decorate([
    (0, tsoa_1.Get)('/'),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackerController.prototype, "getTracker", null);
TrackerController = __decorate([
    (0, tsoa_1.Tags)('Tracker'),
    (0, tsoa_1.Route)('/api/tracker')
], TrackerController);
exports.TrackerController = TrackerController;
