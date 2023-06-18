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


import * as runtime from '../runtime';
import type {
  Account,
  BadRequestError,
  EstimateGasRequest,
  Info,
  InternalServerError,
  Tx,
  TxHistory,
} from '../models';
import {
    AccountFromJSON,
    AccountToJSON,
    BadRequestErrorFromJSON,
    BadRequestErrorToJSON,
    EstimateGasRequestFromJSON,
    EstimateGasRequestToJSON,
    InfoFromJSON,
    InfoToJSON,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    TxFromJSON,
    TxToJSON,
    TxHistoryFromJSON,
    TxHistoryToJSON,
} from '../models';

export interface EstimateGasOperationRequest {
    body?: EstimateGasRequest;
}

export interface GetAccountRequest {
    pubkey: string;
}

export interface GetTxRequest {
    txid: string;
}

export interface GetTxHistoryRequest {
    pubkey: string;
    cursor?: string;
    pageSize?: number;
}

export interface SendTxRequest {
    body?: EstimateGasRequest;
}

/**
 * 
 */
export class V1Api extends runtime.BaseAPI {

    /**
     * Get the estimated gas cost for a transaction.
     */
    async estimateGasRaw(requestParameters: EstimateGasOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/gas/estimate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EstimateGasRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response) as any;
    }

    /**
     * Get the estimated gas cost for a transaction.
     */
    async estimateGas(requestParameters: EstimateGasOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.estimateGasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get account details.
     */
    async getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.pubkey === null || requestParameters.pubkey === undefined) {
            throw new runtime.RequiredError('pubkey','Required parameter requestParameters.pubkey was null or undefined when calling getAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/account/{pubkey}`.replace(`{${"pubkey"}}`, encodeURIComponent(String(requestParameters.pubkey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Get account details.
     */
    async getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information about the running coinstack.
     */
    async getInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Info>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InfoFromJSON(jsonValue));
    }

    /**
     * Get information about the running coinstack.
     */
    async getInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Info> {
        const response = await this.getInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * # Get transaction details
     */
    async getTxRaw(requestParameters: GetTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tx>> {
        if (requestParameters.txid === null || requestParameters.txid === undefined) {
            throw new runtime.RequiredError('txid','Required parameter requestParameters.txid was null or undefined when calling getTx.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/tx/{txid}`.replace(`{${"txid"}}`, encodeURIComponent(String(requestParameters.txid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxFromJSON(jsonValue));
    }

    /**
     * # Get transaction details
     */
    async getTx(requestParameters: GetTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tx> {
        const response = await this.getTxRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get paginated transaction history.
     */
    async getTxHistoryRaw(requestParameters: GetTxHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TxHistory>> {
        if (requestParameters.pubkey === null || requestParameters.pubkey === undefined) {
            throw new runtime.RequiredError('pubkey','Required parameter requestParameters.pubkey was null or undefined when calling getTxHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/account/{pubkey}/txs`.replace(`{${"pubkey"}}`, encodeURIComponent(String(requestParameters.pubkey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TxHistoryFromJSON(jsonValue));
    }

    /**
     * Get paginated transaction history.
     */
    async getTxHistory(requestParameters: GetTxHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TxHistory> {
        const response = await this.getTxHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends raw transaction to be broadcast to the node.
     */
    async sendTxRaw(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/send`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EstimateGasRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response) as any;
    }

    /**
     * Sends raw transaction to be broadcast to the node.
     */
    async sendTx(requestParameters: SendTxRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.sendTxRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
