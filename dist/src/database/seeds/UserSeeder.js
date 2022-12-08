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
const user_1 = require("@entity/user");
const app_1 = require("src/app");
const bcrypt_1 = require("src/helper/bcrypt");
const userSeeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-console
    console.info('Seeding User data');
    const pass = yield (0, bcrypt_1.createHashPassword)('123123');
    const Users = [
        {
            name: 'Super Admin',
            password: pass,
            email: 'admin@example.com',
            role_id: 1
        },
        {
            name: 'Human Resource',
            password: pass,
            email: 'hr@example.com',
            role_id: 2
        },
        {
            name: 'Employee',
            password: pass,
            email: 'employee@example.com',
            role_id: 3
        }
    ];
    yield app_1.db.getConnection().getRepository(user_1.User)
        .insert(Users);
});
exports.default = userSeeds;
