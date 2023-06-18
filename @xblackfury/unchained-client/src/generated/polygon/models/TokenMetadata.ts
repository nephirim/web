// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/polygon-api
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
import type { TokenMetadataMedia } from './TokenMetadataMedia';
import {
    TokenMetadataMediaFromJSON,
    TokenMetadataMediaFromJSONTyped,
    TokenMetadataMediaToJSON,
} from './TokenMetadataMedia';

/**
 * Contains info about token metadata (ERC-721/ERC-1155)
 * @export
 * @interface TokenMetadata
 */
export interface TokenMetadata {
    /**
     * 
     * @type {string}
     * @memberof TokenMetadata
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TokenMetadata
     */
    description: string;
    /**
     * 
     * @type {TokenMetadataMedia}
     * @memberof TokenMetadata
     */
    media: TokenMetadataMedia;
}

/**
 * Check if a given object implements the TokenMetadata interface.
 */
export function instanceOfTokenMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "media" in value;

    return isInstance;
}

export function TokenMetadataFromJSON(json: any): TokenMetadata {
    return TokenMetadataFromJSONTyped(json, false);
}

export function TokenMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'media': TokenMetadataMediaFromJSON(json['media']),
    };
}

export function TokenMetadataToJSON(value?: TokenMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'media': TokenMetadataMediaToJSON(value.media),
    };
}

