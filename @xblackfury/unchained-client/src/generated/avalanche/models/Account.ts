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
import type { TokenBalance } from './TokenBalance';
import {
    TokenBalanceFromJSON,
    TokenBalanceFromJSONTyped,
    TokenBalanceToJSON,
} from './TokenBalance';

/**
 * Contains info about an EVM account
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    balance: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    unconfirmedBalance: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    pubkey: string;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    nonce: number;
    /**
     * 
     * @type {Array<TokenBalance>}
     * @memberof Account
     */
    tokens: Array<TokenBalance>;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "unconfirmedBalance" in value;
    isInstance = isInstance && "pubkey" in value;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "tokens" in value;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'unconfirmedBalance': json['unconfirmedBalance'],
        'pubkey': json['pubkey'],
        'nonce': json['nonce'],
        'tokens': ((json['tokens'] as Array<any>).map(TokenBalanceFromJSON)),
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
        'unconfirmedBalance': value.unconfirmedBalance,
        'pubkey': value.pubkey,
        'nonce': value.nonce,
        'tokens': ((value.tokens as Array<any>).map(TokenBalanceToJSON)),
    };
}

