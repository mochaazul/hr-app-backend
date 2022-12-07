"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPayloadMock = exports.LoginPayloadMock = void 0;
exports.LoginPayloadMock = {
    superAdmin: {
        noInduk: '123',
        password: '123123'
    },
    wrongNip: {
        noInduk: '991238567214',
        password: 'superadmin'
    },
    wrongPassword: {
        noInduk: '123',
        password: 'wrongpassword'
    },
    emptyNip: {
        noInduk: '',
        password: 'superadmin'
    },
    emptyPassword: {
        noInduk: '123',
        password: ''
    },
    emptyNipAndPassword: {
        noInduk: '',
        password: ''
    }
};
exports.RegisterPayloadMock = {
    emptyStringsValidation: {
        noInduk: '',
        password: '',
        name: ''
    },
    existingUser: {
        noInduk: '123',
        password: '123123',
        name: 'Super Admin'
    },
    newRandomUser: {
        noInduk: '9988776655',
        password: 'user123',
        name: 'Test User'
    }
};
