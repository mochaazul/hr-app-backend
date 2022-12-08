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
const seeds_1 = __importDefault(require("src/database/seeds"));
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({});
void (() => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line n/no-path-concat
    console.log(__dirname + '/entity/*.ts');
    yield (0, typeorm_1.createConnection)({
        type: 'postgres',
        host: 'localhost',
        port: Number(process.env.TEST_DATABASE_PORT) || 5433,
        username: process.env.TEST_DATABASE_USERNAME,
        password: process.env.TEST_DATABASE_PASSWORD,
        database: process.env.TEST_DATABASE_NAME,
        // eslint-disable-next-line n/no-path-concat
        entities: ['../src/database/entity/*.ts'],
        dropSchema: true,
        synchronize: true,
        logging: false
    }).then((_con) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, seeds_1.default)(_con);
    }))
        .catch(console.error);
}))();
