// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/polygon-api
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
import type { InternalTx } from './InternalTx';
import {
    InternalTxFromJSON,
    InternalTxFromJSONTyped,
    InternalTxToJSON,
} from './InternalTx';
import type { TokenTransfer } from './TokenTransfer';
import {
    TokenTransferFromJSON,
    TokenTransferFromJSONTyped,
    TokenTransferToJSON,
} from './TokenTransfer';

/**
 * Contains info about an EVM transaction
 * @export
 * @interface Tx
 */
export interface Tx {
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    txid: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    blockHash?: string;
    /**
     * 
     * @type {number}
     * @memberof Tx
     */
    blockHeight: number;
    /**
     * 
     * @type {number}
     * @memberof Tx
     */
    timestamp: number;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    to: string;
    /**
     * 
     * @type {number}
     * @memberof Tx
     */
    confirmations: number;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    fee: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    gasLimit: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    gasUsed?: string;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    gasPrice: string;
    /**
     * 
     * @type {number}
     * @memberof Tx
     */
    status: number;
    /**
     * 
     * @type {string}
     * @memberof Tx
     */
    inputData?: string;
    /**
     * 
     * @type {Array<TokenTransfer>}
     * @memberof Tx
     */
    tokenTransfers?: Array<TokenTransfer>;
    /**
     * 
     * @type {Array<InternalTx>}
     * @memberof Tx
     */
    internalTxs?: Array<InternalTx>;
}

/**
 * Check if a given object implements the Tx interface.
 */
export function instanceOfTx(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "txid" in value;
    isInstance = isInstance && "blockHeight" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "confirmations" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "fee" in value;
    isInstance = isInstance && "gasLimit" in value;
    isInstance = isInstance && "gasPrice" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function TxFromJSON(json: any): Tx {
    return TxFromJSONTyped(json, false);
}

export function TxFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txid': json['txid'],
        'blockHash': !exists(json, 'blockHash') ? undefined : json['blockHash'],
        'blockHeight': json['blockHeight'],
        'timestamp': json['timestamp'],
        'from': json['from'],
        'to': json['to'],
        'confirmations': json['confirmations'],
        'value': json['value'],
        'fee': json['fee'],
        'gasLimit': json['gasLimit'],
        'gasUsed': !exists(json, 'gasUsed') ? undefined : json['gasUsed'],
        'gasPrice': json['gasPrice'],
        'status': json['status'],
        'inputData': !exists(json, 'inputData') ? undefined : json['inputData'],
        'tokenTransfers': !exists(json, 'tokenTransfers') ? undefined : ((json['tokenTransfers'] as Array<any>).map(TokenTransferFromJSON)),
        'internalTxs': !exists(json, 'internalTxs') ? undefined : ((json['internalTxs'] as Array<any>).map(InternalTxFromJSON)),
    };
}

export function TxToJSON(value?: Tx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txid': value.txid,
        'blockHash': value.blockHash,
        'blockHeight': value.blockHeight,
        'timestamp': value.timestamp,
        'from': value.from,
        'to': value.to,
        'confirmations': value.confirmations,
        'value': value.value,
        'fee': value.fee,
        'gasLimit': value.gasLimit,
        'gasUsed': value.gasUsed,
        'gasPrice': value.gasPrice,
        'status': value.status,
        'inputData': value.inputData,
        'tokenTransfers': value.tokenTransfers === undefined ? undefined : ((value.tokenTransfers as Array<any>).map(TokenTransferToJSON)),
        'internalTxs': value.internalTxs === undefined ? undefined : ((value.internalTxs as Array<any>).map(InternalTxToJSON)),
    };
}

