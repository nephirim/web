// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/avalanche-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 9.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Contains info about a 422 Validation Error response
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    message: ValidationErrorMessageEnum;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ValidationError
     */
    details: { [key: string]: any; };
}


/**
 * @export
 */
export const ValidationErrorMessageEnum = {
    ValidationFailed: 'Validation failed'
} as const;
export type ValidationErrorMessageEnum = typeof ValidationErrorMessageEnum[keyof typeof ValidationErrorMessageEnum];


/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function ValidationErrorFromJSON(json: any): ValidationError {
    return ValidationErrorFromJSONTyped(json, false);
}

export function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'details': json['details'],
    };
}

export function ValidationErrorToJSON(value?: ValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'details': value.details,
    };
}

