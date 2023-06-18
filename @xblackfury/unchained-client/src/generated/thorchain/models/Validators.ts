// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Thorchain Unchained API
 * Provides access to thorchain chain data.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Validator } from './Validator';
import {
    ValidatorFromJSON,
    ValidatorFromJSONTyped,
    ValidatorToJSON,
} from './Validator';

/**
 * Contains a list of validators
 * @export
 * @interface Validators
 */
export interface Validators {
    /**
     * Base64 encoded string to fetch next page or undefined if no more data avaiable
     * @type {string}
     * @memberof Validators
     */
    cursor: string;
    /**
     * 
     * @type {Array<Validator>}
     * @memberof Validators
     */
    validators: Array<Validator>;
}

/**
 * Check if a given object implements the Validators interface.
 */
export function instanceOfValidators(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cursor" in value;
    isInstance = isInstance && "validators" in value;

    return isInstance;
}

export function ValidatorsFromJSON(json: any): Validators {
    return ValidatorsFromJSONTyped(json, false);
}

export function ValidatorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Validators {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cursor': json['cursor'],
        'validators': ((json['validators'] as Array<any>).map(ValidatorFromJSON)),
    };
}

export function ValidatorsToJSON(value?: Validators | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cursor': value.cursor,
        'validators': ((value.validators as Array<any>).map(ValidatorToJSON)),
    };
}

