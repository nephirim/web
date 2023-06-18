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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';

/**
 * Contains info about an address or extended public key account
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
     * List of associated addresses for an extended public key
     * @type {Array<Address>}
     * @memberof Account
     */
    addresses?: Array<Address>;
    /**
     * The next unused receive address index for an extended public key (change index 0)
     * @type {number}
     * @memberof Account
     */
    nextReceiveAddressIndex?: number;
    /**
     * The next unused change address index for an extended public key (change index 1)
     * @type {number}
     * @memberof Account
     */
    nextChangeAddressIndex?: number;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "unconfirmedBalance" in value;
    isInstance = isInstance && "pubkey" in value;

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
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(AddressFromJSON)),
        'nextReceiveAddressIndex': !exists(json, 'nextReceiveAddressIndex') ? undefined : json['nextReceiveAddressIndex'],
        'nextChangeAddressIndex': !exists(json, 'nextChangeAddressIndex') ? undefined : json['nextChangeAddressIndex'],
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
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressToJSON)),
        'nextReceiveAddressIndex': value.nextReceiveAddressIndex,
        'nextChangeAddressIndex': value.nextChangeAddressIndex,
    };
}

