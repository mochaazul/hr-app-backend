"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E_ERROR = void 0;
const enums_1 = require("src/constants/enums");
exports.E_ERROR = {
    WRONG_EMAIL_OR_PASsWORD: { message: 'Wrong email / password', status: enums_1.HTTP_CODE.UNAUTHORIZED },
    REGISTER_INVALID_PAYLOAD: { message: 'Nip, password, nama tidak boleh kosong', status: enums_1.HTTP_CODE.BAD_REQUEST },
    NO_TOKEN_PROVIDED: { message: 'No token provided', status: enums_1.HTTP_CODE.UNAUTHORIZED },
    EMAIL_AND_PASSWORD_REQUIRED: { message: 'E-mail and password is required', status: enums_1.HTTP_CODE.BAD_REQUEST },
    FORBIDDEN_ROLE_INPUT: { message: 'Pembuatan user dengan role super admin tidak diperbolehkan', status: enums_1.HTTP_CODE.FORBIDDEN },
    ROLE_NOT_FOUND: { message: 'Role tidak ditemukan', status: enums_1.HTTP_CODE.NO_CONTENT },
    CUSTOMER_NOT_FOUND: { message: 'Pelanggan Tidak ditemukan', status: enums_1.HTTP_CODE.NO_CONTENT },
    DATABASE_ERROR: { message: 'E_DATABASE_ERROR', status: enums_1.HTTP_CODE.INTERNAL_SERVER_ERROR },
    UNKNOWN_ERROR: { message: 'E_UNKNOWN_ERROR', status: enums_1.HTTP_CODE.INTERNAL_SERVER_ERROR },
    NOT_FOUND: { message: 'E_NOT_FOUND', status: enums_1.HTTP_CODE.NO_CONTENT },
    UNAUTHORIZED: { message: 'E_UNAUTHORIZED', status: enums_1.HTTP_CODE.UNAUTHORIZED },
    FORBIDDEN: { message: 'E_FORBIDDEN', status: enums_1.HTTP_CODE.FORBIDDEN },
    INTERNAL_SERVER_ERROR: { message: 'E_INTERNAL_SERVER_ERROR', status: enums_1.HTTP_CODE.INTERNAL_SERVER_ERROR },
    BAD_REQUEST: { message: 'E_BAD_REQUEST', status: enums_1.HTTP_CODE.BAD_REQUEST },
    USER_EXISTS: { message: 'User already exists', status: enums_1.HTTP_CODE.BAD_REQUEST },
    LOGIN_WRONG_PASSWORD: { message: 'Password salah!', status: enums_1.HTTP_CODE.UNAUTHORIZED },
    LOGIN_WRONG_NIP: { message: 'No Induk tidak ditemukan', status: enums_1.HTTP_CODE.UNAUTHORIZED },
    VALIDATION_ERROR: { message: 'E_VALIDATION_ERROR', status: enums_1.HTTP_CODE.BAD_REQUEST },
    USER_NOT_FOUND: { message: 'User not found', status: enums_1.HTTP_CODE.NO_CONTENT },
    USER_IS_NOT_AUTHORIZED: { message: 'User is not authorized', status: enums_1.HTTP_CODE.UNAUTHORIZED },
    TOKEN_EXPIRED: { message: 'Token expired', status: enums_1.HTTP_CODE.UNAUTHORIZED },
    INSUFFICIENT_LEAVE_AMOUNT: { message: 'Employee does not have enough available leave', status: enums_1.HTTP_CODE.BAD_REQUEST },
    NO_PERIOD_SPECIFIED: { message: 'No Period is found or Period is not provided', status: enums_1.HTTP_CODE.BAD_REQUEST }
};
