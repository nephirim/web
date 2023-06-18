// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/ethereum-api
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
 * Contains info about an EVM internal transaction
 * @export
 * @interface InternalTx
 */
export interface InternalTx {
    /**
     * 
     * @type {string}
     * @memberof InternalTx
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof InternalTx
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof InternalTx
     */
    value: string;
}

/**
 * Check if a given object implements the InternalTx interface.
 */
export function instanceOfInternalTx(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function InternalTxFromJSON(json: any): InternalTx {
    return InternalTxFromJSONTyped(json, false);
}

export function InternalTxFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalTx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': json['from'],
        'to': json['to'],
        'value': json['value'],
    };
}

export function InternalTxToJSON(value?: InternalTx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'value': value.value,
    };
}

