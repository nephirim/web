// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/litecoin-api
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
import type { RawTxVinInnerScriptSig } from './RawTxVinInnerScriptSig';
import {
    RawTxVinInnerScriptSigFromJSON,
    RawTxVinInnerScriptSigFromJSONTyped,
    RawTxVinInnerScriptSigToJSON,
} from './RawTxVinInnerScriptSig';

/**
 * 
 * @export
 * @interface RawTxVinInner
 */
export interface RawTxVinInner {
    /**
     * 
     * @type {string}
     * @memberof RawTxVinInner
     */
    txinwitness?: string;
    /**
     * 
     * @type {RawTxVinInnerScriptSig}
     * @memberof RawTxVinInner
     */
    scriptSig?: RawTxVinInnerScriptSig;
    /**
     * 
     * @type {string}
     * @memberof RawTxVinInner
     */
    coinbase?: string;
    /**
     * 
     * @type {number}
     * @memberof RawTxVinInner
     */
    sequence?: number;
    /**
     * 
     * @type {number}
     * @memberof RawTxVinInner
     */
    vout?: number;
    /**
     * 
     * @type {string}
     * @memberof RawTxVinInner
     */
    txid?: string;
}

/**
 * Check if a given object implements the RawTxVinInner interface.
 */
export function instanceOfRawTxVinInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RawTxVinInnerFromJSON(json: any): RawTxVinInner {
    return RawTxVinInnerFromJSONTyped(json, false);
}

export function RawTxVinInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTxVinInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txinwitness': !exists(json, 'txinwitness') ? undefined : json['txinwitness'],
        'scriptSig': !exists(json, 'scriptSig') ? undefined : RawTxVinInnerScriptSigFromJSON(json['scriptSig']),
        'coinbase': !exists(json, 'coinbase') ? undefined : json['coinbase'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'vout': !exists(json, 'vout') ? undefined : json['vout'],
        'txid': !exists(json, 'txid') ? undefined : json['txid'],
    };
}

export function RawTxVinInnerToJSON(value?: RawTxVinInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txinwitness': value.txinwitness,
        'scriptSig': RawTxVinInnerScriptSigToJSON(value.scriptSig),
        'coinbase': value.coinbase,
        'sequence': value.sequence,
        'vout': value.vout,
        'txid': value.txid,
    };
}

