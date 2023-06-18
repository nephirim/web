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
import type { Fees } from './Fees';
import {
    FeesFromJSON,
    FeesFromJSONTyped,
    FeesToJSON,
} from './Fees';

/**
 * Contains info about current recommended fees to use in a transaction.
 * Estimates for slow, average and fast confirmation speeds provided as well.
 * @export
 * @interface GasFees
 */
export interface GasFees {
    /**
     * 
     * @type {string}
     * @memberof GasFees
     */
    gasPrice: string;
    /**
     * 
     * @type {string}
     * @memberof GasFees
     */
    baseFeePerGas?: string;
    /**
     * 
     * @type {string}
     * @memberof GasFees
     */
    maxPriorityFeePerGas?: string;
    /**
     * 
     * @type {Fees}
     * @memberof GasFees
     */
    slow: Fees;
    /**
     * 
     * @type {Fees}
     * @memberof GasFees
     */
    average: Fees;
    /**
     * 
     * @type {Fees}
     * @memberof GasFees
     */
    fast: Fees;
}

/**
 * Check if a given object implements the GasFees interface.
 */
export function instanceOfGasFees(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gasPrice" in value;
    isInstance = isInstance && "slow" in value;
    isInstance = isInstance && "average" in value;
    isInstance = isInstance && "fast" in value;

    return isInstance;
}

export function GasFeesFromJSON(json: any): GasFees {
    return GasFeesFromJSONTyped(json, false);
}

export function GasFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GasFees {
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
    };
}

export function GasFeesToJSON(value?: GasFees | null): any {
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
    };
}

