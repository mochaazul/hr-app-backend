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
const role_1 = require("@entity/role");
const app_1 = require("src/app");
const roleSeeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-console
    console.info('Seeding Role data');
    const role = {
        role: 'Super Admin',
        scopesId: 1
    };
    yield app_1.db.getConnection().getRepository(role_1.Role)
        .insert(role);
});
exports.default = roleSeeds;
