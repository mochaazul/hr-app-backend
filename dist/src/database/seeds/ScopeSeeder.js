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
const scopes_1 = require("@entity/scopes");
const app_1 = require("src/app");
const scopeSeeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-console
    console.info('Seeding Scope data');
    const scopes = [
        {
            create_employee: true,
            read_employee: true,
            update_employee: true,
            delete_employee: true
        },
        {
            create_employee: true,
            read_employee: true,
            update_employee: true,
            delete_employee: true
        },
        {
            create_employee: false,
            read_employee: true,
            update_employee: false,
            delete_employee: false
        }
    ];
    yield app_1.db.getConnection().getRepository(scopes_1.Scope)
        .insert(scopes);
});
exports.default = scopeSeeds;
