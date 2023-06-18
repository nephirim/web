// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Osmosis Unchained API
 * Provides access to osmosis chain data.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Delegation } from './Delegation';
import {
    DelegationFromJSON,
    DelegationFromJSONTyped,
    DelegationToJSON,
} from './Delegation';
import type { Redelegation } from './Redelegation';
import {
    RedelegationFromJSON,
    RedelegationFromJSONTyped,
    RedelegationToJSON,
} from './Redelegation';
import type { Reward } from './Reward';
import {
    RewardFromJSON,
    RewardFromJSONTyped,
    RewardToJSON,
} from './Reward';
import type { Unbonding } from './Unbonding';
import {
    UnbondingFromJSON,
    UnbondingFromJSONTyped,
    UnbondingToJSON,
} from './Unbonding';

/**
 * Contains info about current staking state
 * @export
 * @interface Staking
 */
export interface Staking {
    /**
     * 
     * @type {Array<Delegation>}
     * @memberof Staking
     */
    delegations: Array<Delegation>;
    /**
     * 
     * @type {Array<Redelegation>}
     * @memberof Staking
     */
    redelegations: Array<Redelegation>;
    /**
     * 
     * @type {Array<Reward>}
     * @memberof Staking
     */
    rewards: Array<Reward>;
    /**
     * 
     * @type {Array<Unbonding>}
     * @memberof Staking
     */
    unbondings: Array<Unbonding>;
}

/**
 * Check if a given object implements the Staking interface.
 */
export function instanceOfStaking(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "delegations" in value;
    isInstance = isInstance && "redelegations" in value;
    isInstance = isInstance && "rewards" in value;
    isInstance = isInstance && "unbondings" in value;

    return isInstance;
}

export function StakingFromJSON(json: any): Staking {
    return StakingFromJSONTyped(json, false);
}

export function StakingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Staking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delegations': ((json['delegations'] as Array<any>).map(DelegationFromJSON)),
        'redelegations': ((json['redelegations'] as Array<any>).map(RedelegationFromJSON)),
        'rewards': ((json['rewards'] as Array<any>).map(RewardFromJSON)),
        'unbondings': ((json['unbondings'] as Array<any>).map(UnbondingFromJSON)),
    };
}

export function StakingToJSON(value?: Staking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delegations': ((value.delegations as Array<any>).map(DelegationToJSON)),
        'redelegations': ((value.redelegations as Array<any>).map(RedelegationToJSON)),
        'rewards': ((value.rewards as Array<any>).map(RewardToJSON)),
        'unbondings': ((value.unbondings as Array<any>).map(UnbondingToJSON)),
    };
}

