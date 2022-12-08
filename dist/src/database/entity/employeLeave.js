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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeave = void 0;
const typeorm_1 = require("typeorm");
const employee_1 = require("./employee");
const leaveRecord_1 = require("./leaveRecord");
let EmployeeLeave = class EmployeeLeave extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", String)
], EmployeeLeave.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_1.Employee, employee => employee.leaves),
    (0, typeorm_1.JoinColumn)({ name: 'employee_id' }),
    __metadata("design:type", employee_1.Employee)
], EmployeeLeave.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmployeeLeave.prototype, "employee_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmployeeLeave.prototype, "period", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EmployeeLeave.prototype, "total_prev_period_leave", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EmployeeLeave.prototype, "total_current_period_leave", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EmployeeLeave.prototype, "total_additional_leave", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EmployeeLeave.prototype, "available_leave", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EmployeeLeave.prototype, "taken_leave", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => leaveRecord_1.LeaveRecord, record => record.id),
    __metadata("design:type", Array)
], EmployeeLeave.prototype, "records", void 0);
EmployeeLeave = __decorate([
    (0, typeorm_1.Entity)({ name: 'employee_leave' })
], EmployeeLeave);
exports.EmployeeLeave = EmployeeLeave;
