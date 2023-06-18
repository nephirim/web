// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/optimism-api
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
 * Contains info about legacy and/or EIP-1559 fees
 * @export
 * @interface Fees
 */
export interface Fees {
    /**
     * 
     * @type {string}
     * @memberof Fees
     */
    gasPrice: string;
    /**
     * 
     * @type {string}
     * @memberof Fees
     */
    maxFeePerGas?: string;
    /**
     * 
     * @type {string}
     * @memberof Fees
     */
    maxPriorityFeePerGas?: string;
}

/**
 * Check if a given object implements the Fees interface.
 */
export function instanceOfFees(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gasPrice" in value;

    return isInstance;
}

export function FeesFromJSON(json: any): Fees {
    return FeesFromJSONTyped(json, false);
}

export function FeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Fees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gasPrice': json['gasPrice'],
        'maxFeePerGas': !exists(json, 'maxFeePerGas') ? undefined : json['maxFeePerGas'],
        'maxPriorityFeePerGas': !exists(json, 'maxPriorityFeePerGas') ? undefined : json['maxPriorityFeePerGas'],
    };
}

export function FeesToJSON(value?: Fees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gasPrice': value.gasPrice,
        'maxFeePerGas': value.maxFeePerGas,
        'maxPriorityFeePerGas': value.maxPriorityFeePerGas,
    };
}

