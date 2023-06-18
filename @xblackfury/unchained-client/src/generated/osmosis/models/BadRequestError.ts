// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Osmosis Unchained API
 * Provides access to osmosis chain data.
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
 * Contains info about a 400 Bad Request response
 * @export
 * @interface BadRequestError
 */
export interface BadRequestError {
    /**
     * 
     * @type {string}
     * @memberof BadRequestError
     */
    error: string;
}

/**
 * Check if a given object implements the BadRequestError interface.
 */
export function instanceOfBadRequestError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "error" in value;

    return isInstance;
}

export function BadRequestErrorFromJSON(json: any): BadRequestError {
    return BadRequestErrorFromJSONTyped(json, false);
}

export function BadRequestErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadRequestError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': json['error'],
    };
}

export function BadRequestErrorToJSON(value?: BadRequestError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
    };
}

