// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/gnosis-api
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
import type { Tx } from './Tx';
import {
    TxFromJSON,
    TxFromJSONTyped,
    TxToJSON,
} from './Tx';

/**
 * Contains paginated base transaction history details
 * @export
 * @interface BaseTxHistoryTx
 */
export interface BaseTxHistoryTx {
    /**
     * 
     * @type {string}
     * @memberof BaseTxHistoryTx
     */
    cursor?: string;
    /**
     * 
     * @type {string}
     * @memberof BaseTxHistoryTx
     */
    pubkey: string;
    /**
     * 
     * @type {Array<Tx>}
     * @memberof BaseTxHistoryTx
     */
    txs: Array<Tx>;
}

/**
 * Check if a given object implements the BaseTxHistoryTx interface.
 */
export function instanceOfBaseTxHistoryTx(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pubkey" in value;
    isInstance = isInstance && "txs" in value;

    return isInstance;
}

export function BaseTxHistoryTxFromJSON(json: any): BaseTxHistoryTx {
    return BaseTxHistoryTxFromJSONTyped(json, false);
}

export function BaseTxHistoryTxFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseTxHistoryTx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cursor': !exists(json, 'cursor') ? undefined : json['cursor'],
        'pubkey': json['pubkey'],
        'txs': ((json['txs'] as Array<any>).map(TxFromJSON)),
    };
}

export function BaseTxHistoryTxToJSON(value?: BaseTxHistoryTx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cursor': value.cursor,
        'pubkey': value.pubkey,
        'txs': ((value.txs as Array<any>).map(TxToJSON)),
    };
}

