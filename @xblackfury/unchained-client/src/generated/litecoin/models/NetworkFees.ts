// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/litecoin-api
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
import type { NetworkFee } from './NetworkFee';
import {
    NetworkFeeFromJSON,
    NetworkFeeFromJSONTyped,
    NetworkFeeToJSON,
} from './NetworkFee';

/**
 * Contains info about current recommended network fees
 * @export
 * @interface NetworkFees
 */
export interface NetworkFees {
    /**
     * 
     * @type {NetworkFee}
     * @memberof NetworkFees
     */
    fast?: NetworkFee;
    /**
     * 
     * @type {NetworkFee}
     * @memberof NetworkFees
     */
    average?: NetworkFee;
    /**
     * 
     * @type {NetworkFee}
     * @memberof NetworkFees
     */
    slow?: NetworkFee;
}

/**
 * Check if a given object implements the NetworkFees interface.
 */
export function instanceOfNetworkFees(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NetworkFeesFromJSON(json: any): NetworkFees {
    return NetworkFeesFromJSONTyped(json, false);
}

export function NetworkFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fast': !exists(json, 'fast') ? undefined : NetworkFeeFromJSON(json['fast']),
        'average': !exists(json, 'average') ? undefined : NetworkFeeFromJSON(json['average']),
        'slow': !exists(json, 'slow') ? undefined : NetworkFeeFromJSON(json['slow']),
    };
}

export function NetworkFeesToJSON(value?: NetworkFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fast': NetworkFeeToJSON(value.fast),
        'average': NetworkFeeToJSON(value.average),
        'slow': NetworkFeeToJSON(value.slow),
    };
}

