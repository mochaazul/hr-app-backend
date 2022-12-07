/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeAddLeaveRequestBody } from '../models/EmployeeAddLeaveRequestBody';
import type { EmployeeCreateRequestBody } from '../models/EmployeeCreateRequestBody';
import type { EmployeeUpdateRequestBody } from '../models/EmployeeUpdateRequestBody';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeeService {

    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAllEmployee(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employee',
        });
    }

    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createEmployee(
        requestBody: EmployeeCreateRequestBody,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/employee',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getEmployeLeaveStats(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employee/leave-stats/{id}',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static addLeave(
        requestBody: EmployeeAddLeaveRequestBody,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/employee/add-leave',
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
    public static updateEmployee(
        id: string,
        requestBody: EmployeeUpdateRequestBody,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/employee/{id}',
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
    public static deleteEmployee(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/employee/{id}',
            query: {
                'id': id,
            },
        });
    }

}
