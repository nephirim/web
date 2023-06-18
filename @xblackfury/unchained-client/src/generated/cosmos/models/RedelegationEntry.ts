// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Cosmos Unchained API
 * Provides access to cosmos chain data.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Contains info about a redelegation action
 * @export
 * @interface RedelegationEntry
 */
export interface RedelegationEntry {
    /**
     * 
     * @type {string}
     * @memberof RedelegationEntry
     */
    balance: string;
    /**
     * 
     * @type {string}
     * @memberof RedelegationEntry
     */
    completionTime: string;
    /**
     * 
     * @type {string}
     * @memberof RedelegationEntry
     */
    shares: string;
}

/**
 * Check if a given object implements the RedelegationEntry interface.
 */
export function instanceOfRedelegationEntry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "completionTime" in value;
    isInstance = isInstance && "shares" in value;

    return isInstance;
}

export function RedelegationEntryFromJSON(json: any): RedelegationEntry {
    return RedelegationEntryFromJSONTyped(json, false);
}

export function RedelegationEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedelegationEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'completionTime': json['completionTime'],
        'shares': json['shares'],
    };
}

export function RedelegationEntryToJSON(value?: RedelegationEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
        'completionTime': value.completionTime,
        'shares': value.shares,
    };
}

