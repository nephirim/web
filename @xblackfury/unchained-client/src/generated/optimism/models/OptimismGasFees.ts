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
import type { Fees } from './Fees';
import {
    FeesFromJSON,
    FeesFromJSONTyped,
    FeesToJSON,
} from './Fees';

/**
 * Contains info about current recommended fees for a transaction on both L1 and L2
 * @export
 * @interface OptimismGasFees
 */
export interface OptimismGasFees {
    /**
     * 
     * @type {string}
     * @memberof OptimismGasFees
     */
    gasPrice: string;
    /**
     * 
     * @type {string}
     * @memberof OptimismGasFees
     */
    baseFeePerGas?: string;
    /**
     * 
     * @type {string}
     * @memberof OptimismGasFees
     */
    maxPriorityFeePerGas?: string;
    /**
     * 
     * @type {Fees}
     * @memberof OptimismGasFees
     */
    slow: Fees;
    /**
     * 
     * @type {Fees}
     * @memberof OptimismGasFees
     */
    average: Fees;
    /**
     * 
     * @type {Fees}
     * @memberof OptimismGasFees
     */
    fast: Fees;
    /**
     * 
     * @type {string}
     * @memberof OptimismGasFees
     */
    l1GasPrice: string;
}

/**
 * Check if a given object implements the OptimismGasFees interface.
 */
export function instanceOfOptimismGasFees(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gasPrice" in value;
    isInstance = isInstance && "slow" in value;
    isInstance = isInstance && "average" in value;
    isInstance = isInstance && "fast" in value;
    isInstance = isInstance && "l1GasPrice" in value;

    return isInstance;
}

export function OptimismGasFeesFromJSON(json: any): OptimismGasFees {
    return OptimismGasFeesFromJSONTyped(json, false);
}

export function OptimismGasFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptimismGasFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gasPrice': json['gasPrice'],
        'baseFeePerGas': !exists(json, 'baseFeePerGas') ? undefined : json['baseFeePerGas'],
        'maxPriorityFeePerGas': !exists(json, 'maxPriorityFeePerGas') ? undefined : json['maxPriorityFeePerGas'],
        'slow': FeesFromJSON(json['slow']),
        'average': FeesFromJSON(json['average']),
        'fast': FeesFromJSON(json['fast']),
        'l1GasPrice': json['l1GasPrice'],
    };
}

export function OptimismGasFeesToJSON(value?: OptimismGasFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gasPrice': value.gasPrice,
        'baseFeePerGas': value.baseFeePerGas,
        'maxPriorityFeePerGas': value.maxPriorityFeePerGas,
        'slow': FeesToJSON(value.slow),
        'average': FeesToJSON(value.average),
        'fast': FeesToJSON(value.fast),
        'l1GasPrice': value.l1GasPrice,
    };
}

