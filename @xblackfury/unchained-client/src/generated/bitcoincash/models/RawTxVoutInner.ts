// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/bitcoincash-api
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
import type { RawTxVoutInnerScriptPubKey } from './RawTxVoutInnerScriptPubKey';
import {
    RawTxVoutInnerScriptPubKeyFromJSON,
    RawTxVoutInnerScriptPubKeyFromJSONTyped,
    RawTxVoutInnerScriptPubKeyToJSON,
} from './RawTxVoutInnerScriptPubKey';
import type { RawTxVoutInnerValue } from './RawTxVoutInnerValue';
import {
    RawTxVoutInnerValueFromJSON,
    RawTxVoutInnerValueFromJSONTyped,
    RawTxVoutInnerValueToJSON,
} from './RawTxVoutInnerValue';

/**
 * 
 * @export
 * @interface RawTxVoutInner
 */
export interface RawTxVoutInner {
    /**
     * 
     * @type {RawTxVoutInnerScriptPubKey}
     * @memberof RawTxVoutInner
     */
    scriptPubKey?: RawTxVoutInnerScriptPubKey;
    /**
     * 
     * @type {number}
     * @memberof RawTxVoutInner
     */
    n?: number;
    /**
     * 
     * @type {RawTxVoutInnerValue}
     * @memberof RawTxVoutInner
     */
    value?: RawTxVoutInnerValue;
}

/**
 * Check if a given object implements the RawTxVoutInner interface.
 */
export function instanceOfRawTxVoutInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RawTxVoutInnerFromJSON(json: any): RawTxVoutInner {
    return RawTxVoutInnerFromJSONTyped(json, false);
}

export function RawTxVoutInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTxVoutInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scriptPubKey': !exists(json, 'scriptPubKey') ? undefined : RawTxVoutInnerScriptPubKeyFromJSON(json['scriptPubKey']),
        'n': !exists(json, 'n') ? undefined : json['n'],
        'value': !exists(json, 'value') ? undefined : RawTxVoutInnerValueFromJSON(json['value']),
    };
}

export function RawTxVoutInnerToJSON(value?: RawTxVoutInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scriptPubKey': RawTxVoutInnerScriptPubKeyToJSON(value.scriptPubKey),
        'n': value.n,
        'value': RawTxVoutInnerValueToJSON(value.value),
    };
}

