// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Thorchain Unchained API
 * Provides access to thorchain chain data.
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
 * Contains info about pagination metadata
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Base64 encoded string to fetch next page or undefined if no more data avaiable
     * @type {string}
     * @memberof Pagination
     */
    cursor: string;
}

/**
 * Check if a given object implements the Pagination interface.
 */
export function instanceOfPagination(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cursor" in value;

    return isInstance;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cursor': json['cursor'],
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cursor': value.cursor,
    };
}

