"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scopeSeeds = () => {
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
    return scopes;
};
exports.default = scopeSeeds;
