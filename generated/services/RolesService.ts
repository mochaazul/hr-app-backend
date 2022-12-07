/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAllRoles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles',
        });
    }

}
