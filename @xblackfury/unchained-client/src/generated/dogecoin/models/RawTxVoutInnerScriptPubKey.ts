// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/dogecoin-api
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
 * @interface RawTxVoutInnerScriptPubKey
 */
export interface RawTxVoutInnerScriptPubKey {
    /**
     * 
     * @type {Array<string>}
     * @memberof RawTxVoutInnerScriptPubKey
     */
    addresses: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RawTxVoutInnerScriptPubKey
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof RawTxVoutInnerScriptPubKey
     */
    reqSigs: number;
    /**
     * 
     * @type {string}
     * @memberof RawTxVoutInnerScriptPubKey
     */
    hex: string;
    /**
     * 
     * @type {string}
     * @memberof RawTxVoutInnerScriptPubKey
     */
    asm: string;
}

/**
 * Check if a given object implements the RawTxVoutInnerScriptPubKey interface.
 */
export function instanceOfRawTxVoutInnerScriptPubKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addresses" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "reqSigs" in value;
    isInstance = isInstance && "hex" in value;
    isInstance = isInstance && "asm" in value;

    return isInstance;
}

export function RawTxVoutInnerScriptPubKeyFromJSON(json: any): RawTxVoutInnerScriptPubKey {
    return RawTxVoutInnerScriptPubKeyFromJSONTyped(json, false);
}

export function RawTxVoutInnerScriptPubKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTxVoutInnerScriptPubKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': json['addresses'],
        'type': json['type'],
        'reqSigs': json['reqSigs'],
        'hex': json['hex'],
        'asm': json['asm'],
    };
}

export function RawTxVoutInnerScriptPubKeyToJSON(value?: RawTxVoutInnerScriptPubKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses,
        'type': value.type,
        'reqSigs': value.reqSigs,
        'hex': value.hex,
        'asm': value.asm,
    };
}

