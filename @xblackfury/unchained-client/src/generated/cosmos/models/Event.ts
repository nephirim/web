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
import type { Attribute } from './Attribute';
import {
    AttributeFromJSON,
    AttributeFromJSONTyped,
    AttributeToJSON,
} from './Attribute';

/**
 * Contains info about a transaction log event
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof Event
     */
    attributes: Array<Attribute>;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    type: string;
}

/**
 * Check if a given object implements the Event interface.
 */
export function instanceOfEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function EventFromJSON(json: any): Event {
    return EventFromJSONTyped(json, false);
}

export function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': ((json['attributes'] as Array<any>).map(AttributeFromJSON)),
        'type': json['type'],
    };
}

export function EventToJSON(value?: Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': ((value.attributes as Array<any>).map(AttributeToJSON)),
        'type': value.type,
    };
}

