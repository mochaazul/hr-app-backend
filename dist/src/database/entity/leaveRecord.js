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
exports.LeaveRecord = void 0;
const typeorm_1 = require("typeorm");
const employeLeave_1 = require("./employeLeave");
const leaveType_1 = require("./leaveType");
let LeaveRecord = class LeaveRecord extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", String)
], LeaveRecord.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => leaveType_1.LeaveType, type => type.id),
    __metadata("design:type", leaveType_1.LeaveType)
], LeaveRecord.prototype, "leave_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], LeaveRecord.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], LeaveRecord.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employeLeave_1.EmployeeLeave, employee => employee.id),
    __metadata("design:type", employeLeave_1.EmployeeLeave)
], LeaveRecord.prototype, "employe_leave", void 0);
LeaveRecord = __decorate([
    (0, typeorm_1.Entity)({ name: 'leave_record' })
], LeaveRecord);
exports.LeaveRecord = LeaveRecord;
