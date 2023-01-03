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
const employee_1 = require("@entity/employee");
const employeLeave_1 = require("@entity/employeLeave");
const position_1 = require("@entity/position");
const role_1 = require("@entity/role");
const scopes_1 = require("@entity/scopes");
const user_1 = require("@entity/user");
const EmployeeSeeder_1 = __importDefault(require("./EmployeeSeeder"));
const PositionSeeder_1 = __importDefault(require("./PositionSeeder"));
const RoleSeeder_1 = __importDefault(require("./RoleSeeder"));
const ScopeSeeder_1 = __importDefault(require("./ScopeSeeder"));
const UserSeeder_1 = __importDefault(require("./UserSeeder"));
const doSeeding = (_con) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // eslint-disable-next-line no-console
        console.log('Seeding data...');
        const scopes = (0, ScopeSeeder_1.default)();
        const roles = (0, RoleSeeder_1.default)();
        const users = yield (0, UserSeeder_1.default)();
        const positions = (0, PositionSeeder_1.default)();
        const { employeLeave, employeeData } = (0, EmployeeSeeder_1.default)();
        yield _con.getRepository(scopes_1.Scope).insert(scopes);
        yield _con.getRepository(role_1.Role).insert(roles);
        yield _con.getRepository(user_1.User).insert(users);
        yield _con.getRepository(position_1.Position).insert(positions);
        yield _con.getRepository(employee_1.Employee).insert(employeeData);
        yield _con.getRepository(employeLeave_1.EmployeeLeave).insert(employeLeave);
        console.log('Seeding data finished');
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.default = doSeeding;
