// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/blackfury-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Contains info about a token including balance for an address
 * @export
 * @interface TokenBalance
 */
export interface TokenBalance {
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    contract: string;
    /**
     * 
     * @type {number}
     * @memberof TokenBalance
     */
    decimals: number;
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    type: string;
    /**
     * nft or multi token id
     * @type {string}
     * @memberof TokenBalance
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    balance: string;
}

/**
 * Check if a given object implements the TokenBalance interface.
 */
export function instanceOfTokenBalance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contract" in value;
    isInstance = isInstance && "decimals" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "balance" in value;

    return isInstance;
}

export function TokenBalanceFromJSON(json: any): TokenBalance {
    return TokenBalanceFromJSONTyped(json, false);
}

export function TokenBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenBalance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contract': json['contract'],
        'decimals': json['decimals'],
        'name': json['name'],
        'symbol': json['symbol'],
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'balance': json['balance'],
    };
}

export function TokenBalanceToJSON(value?: TokenBalance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract': value.contract,
        'decimals': value.decimals,
        'name': value.name,
        'symbol': value.symbol,
        'type': value.type,
        'id': value.id,
        'balance': value.balance,
    };
}

