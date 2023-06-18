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
 * Contains base info about the running coinstack
 * @export
 * @interface BaseInfo
 */
export interface BaseInfo {
    /**
     * 
     * @type {string}
     * @memberof BaseInfo
     */
    network: string;
}

/**
 * Check if a given object implements the BaseInfo interface.
 */
export function instanceOfBaseInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "network" in value;

    return isInstance;
}

export function BaseInfoFromJSON(json: any): BaseInfo {
    return BaseInfoFromJSONTyped(json, false);
}

export function BaseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network': json['network'],
    };
}

export function BaseInfoToJSON(value?: BaseInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network': value.network,
    };
}

