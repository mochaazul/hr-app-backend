/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequestParameter } from '../models/LoginRequestParameter';
import type { RegisterRequestParameter } from '../models/RegisterRequestParameter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthorizationService {

    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static login(
        requestBody: LoginRequestParameter,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static register(
        requestBody: RegisterRequestParameter,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
