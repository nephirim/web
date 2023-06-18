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
 * 
 * @export
 * @interface InfoAllOf
 */
export interface InfoAllOf {
    /**
     * 
     * @type {string}
     * @memberof InfoAllOf
     */
    apr: string;
}

/**
 * Check if a given object implements the InfoAllOf interface.
 */
export function instanceOfInfoAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apr" in value;

    return isInstance;
}

export function InfoAllOfFromJSON(json: any): InfoAllOf {
    return InfoAllOfFromJSONTyped(json, false);
}

export function InfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): InfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apr': json['apr'],
    };
}

export function InfoAllOfToJSON(value?: InfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apr': value.apr,
    };
}

