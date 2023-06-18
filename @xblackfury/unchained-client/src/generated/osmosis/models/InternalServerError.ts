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
 * Contains info about a 500 Internal Server Error response
 * @export
 * @interface InternalServerError
 */
export interface InternalServerError {
    /**
     * 
     * @type {string}
     * @memberof InternalServerError
     */
    message?: string;
}

/**
 * Check if a given object implements the InternalServerError interface.
 */
export function instanceOfInternalServerError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InternalServerErrorFromJSON(json: any): InternalServerError {
    return InternalServerErrorFromJSONTyped(json, false);
}

export function InternalServerErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalServerError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function InternalServerErrorToJSON(value?: InternalServerError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

