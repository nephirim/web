// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/bitcoin-api
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
 * 
 * @export
 * @interface VinScriptSig
 */
export interface VinScriptSig {
    /**
     * 
     * @type {string}
     * @memberof VinScriptSig
     */
    hex?: string;
}

/**
 * Check if a given object implements the VinScriptSig interface.
 */
export function instanceOfVinScriptSig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VinScriptSigFromJSON(json: any): VinScriptSig {
    return VinScriptSigFromJSONTyped(json, false);
}

export function VinScriptSigFromJSONTyped(json: any, ignoreDiscriminator: boolean): VinScriptSig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hex': !exists(json, 'hex') ? undefined : json['hex'],
    };
}

export function VinScriptSigToJSON(value?: VinScriptSig | null): any {
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

