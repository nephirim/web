// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Cosmos Unchained API
 * Provides access to cosmos chain data.
 *
 * The version of the OpenAPI document: 1.0.0
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
     * @type {{ [key: string]: string; }}
     * @memberof ValidationError
     */
    details: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    message: string;
}

/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "details" in value;
    isInstance = isInstance && "message" in value;

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
        
        'details': json['details'],
        'message': json['message'],
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
        
        'details': value.details,
        'message': value.message,
    };
}

