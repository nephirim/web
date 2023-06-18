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
 * Contains info about validator commission settings
 * @export
 * @interface ValidatorCommission
 */
export interface ValidatorCommission {
    /**
     * 
     * @type {string}
     * @memberof ValidatorCommission
     */
    maxChangeRate: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorCommission
     */
    maxRate: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorCommission
     */
    rate: string;
}

/**
 * Check if a given object implements the ValidatorCommission interface.
 */
export function instanceOfValidatorCommission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "maxChangeRate" in value;
    isInstance = isInstance && "maxRate" in value;
    isInstance = isInstance && "rate" in value;

    return isInstance;
}

export function ValidatorCommissionFromJSON(json: any): ValidatorCommission {
    return ValidatorCommissionFromJSONTyped(json, false);
}

export function ValidatorCommissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorCommission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxChangeRate': json['maxChangeRate'],
        'maxRate': json['maxRate'],
        'rate': json['rate'],
    };
}

export function ValidatorCommissionToJSON(value?: ValidatorCommission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxChangeRate': value.maxChangeRate,
        'maxRate': value.maxRate,
        'rate': value.rate,
    };
}

