"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roleSeeds = () => {
    // eslint-disable-next-line no-console
    console.info('Seeding Role data');
    const role = [
        {
            role: 'Super Admin',
            scopesId: 1
        },
        {
            role: 'Human Resource role',
            scopesId: 2
        },
        {
            role: 'Employee Role',
            scopesId: 3
        }
    ];
    return role;
};
exports.default = roleSeeds;
