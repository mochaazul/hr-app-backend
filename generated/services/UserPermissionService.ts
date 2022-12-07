/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserPermissionService {

    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAllUser(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-permission/get-all',
        });
    }

    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createUser(
        requestBody: {
            roles: Array<string>;
            email: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-permission/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateUser(
        id: string,
        requestBody: {
            roles: Array<string>;
            email: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user-permission/update/{id}',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static deleteUser(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user-permission/delete/{id}',
            query: {
                'id': id,
            },
        });
    }

}
