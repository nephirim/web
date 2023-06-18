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
 * Contains info about a transaction log event key/val attribute
 * @export
 * @interface Attribute
 */
export interface Attribute {
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    value: string;
}

/**
 * Check if a given object implements the Attribute interface.
 */
export function instanceOfAttribute(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function AttributeFromJSON(json: any): Attribute {
    return AttributeFromJSONTyped(json, false);
}

export function AttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Attribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function AttributeToJSON(value?: Attribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}

