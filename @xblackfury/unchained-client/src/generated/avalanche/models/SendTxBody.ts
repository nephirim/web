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
 * Contains the serialized raw transaction hex
 * @export
 * @interface SendTxBody
 */
export interface SendTxBody {
    /**
     * 
     * @type {string}
     * @memberof SendTxBody
     */
    hex: string;
}

/**
 * Check if a given object implements the SendTxBody interface.
 */
export function instanceOfSendTxBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hex" in value;

    return isInstance;
}

export function SendTxBodyFromJSON(json: any): SendTxBody {
    return SendTxBodyFromJSONTyped(json, false);
}

export function SendTxBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendTxBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hex': json['hex'],
    };
}

export function SendTxBodyToJSON(value?: SendTxBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hex': value.hex,
    };
}

