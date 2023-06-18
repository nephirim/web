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
/**
 * Contains info about an unspent transaction output
 * @export
 * @interface Utxo
 */
export interface Utxo {
    /**
     * 
     * @type {string}
     * @memberof Utxo
     */
    txid: string;
    /**
     * 
     * @type {number}
     * @memberof Utxo
     */
    vout: number;
    /**
     * 
     * @type {string}
     * @memberof Utxo
     */
    value: string;
    /**
     * 
     * @type {number}
     * @memberof Utxo
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof Utxo
     */
    confirmations: number;
    /**
     * 
     * @type {string}
     * @memberof Utxo
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Utxo
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof Utxo
     */
    locktime?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Utxo
     */
    coinbase?: boolean;
}

/**
 * Check if a given object implements the Utxo interface.
 */
export function instanceOfUtxo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "txid" in value;
    isInstance = isInstance && "vout" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "confirmations" in value;

    return isInstance;
}

export function UtxoFromJSON(json: any): Utxo {
    return UtxoFromJSONTyped(json, false);
}

export function UtxoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Utxo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txid': json['txid'],
        'vout': json['vout'],
        'value': json['value'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'confirmations': json['confirmations'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'locktime': !exists(json, 'locktime') ? undefined : json['locktime'],
        'coinbase': !exists(json, 'coinbase') ? undefined : json['coinbase'],
    };
}

export function UtxoToJSON(value?: Utxo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txid': value.txid,
        'vout': value.vout,
        'value': value.value,
        'height': value.height,
        'confirmations': value.confirmations,
        'address': value.address,
        'path': value.path,
        'locktime': value.locktime,
        'coinbase': value.coinbase,
    };
}

