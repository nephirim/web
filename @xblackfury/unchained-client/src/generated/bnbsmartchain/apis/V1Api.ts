// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/bnbsmartchain-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 9.3.0
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
  BaseInfo,
  BaseTxHistoryTx,
  GasEstimate,
  GasFees,
  InternalServerError,
  SendTxBody,
  TokenMetadata,
  TokenType,
  Tx,
  ValidationError,
} from '../models';
import {
    AccountFromJSON,
    AccountToJSON,
    BadRequestErrorFromJSON,
    BadRequestErrorToJSON,
    BaseInfoFromJSON,
    BaseInfoToJSON,
    BaseTxHistoryTxFromJSON,
    BaseTxHistoryTxToJSON,
    GasEstimateFromJSON,
    GasEstimateToJSON,
    GasFeesFromJSON,
    GasFeesToJSON,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    SendTxBodyFromJSON,
    SendTxBodyToJSON,
    TokenMetadataFromJSON,
    TokenMetadataToJSON,
    TokenTypeFromJSON,
    TokenTypeToJSON,
    TxFromJSON,
    TxToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface EstimateGasRequest {
    data: string;
    from: string;
    to: string;
    value: string;
}

export interface GetAccountRequest {
    pubkey: string;
}

export interface GetTokenMetadataRequest {
    contract: string;
    id: string;
    type: TokenType;
}

export interface GetTransactionRequest {
    txid: string;
}

export interface GetTxHistoryRequest {
    pubkey: string;
    cursor?: string;
    pageSize?: number;
}

export interface SendTxRequest {
    sendTxBody: SendTxBody;
}

/**
 * 
 */
export class V1Api extends runtime.BaseAPI {

    /**
     * Get the estimated gas cost of a transaction
     */
    async estimateGasRaw(requestParameters: EstimateGasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GasEstimate>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling estimateGas.');
        }

        if (requestParameters.from === null || requestParameters.from === undefined) {
            throw new runtime.RequiredError('from','Required parameter requestParameters.from was null or undefined when calling estimateGas.');
        }

        if (requestParameters.to === null || requestParameters.to === undefined) {
            throw new runtime.RequiredError('to','Required parameter requestParameters.to was null or undefined when calling estimateGas.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling estimateGas.');
        }

        const queryParameters: any = {};

        if (requestParameters.data !== undefined) {
            queryParameters['data'] = requestParameters.data;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.value !== undefined) {
            queryParameters['value'] = requestParameters.value;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/gas/estimate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GasEstimateFromJSON(jsonValue));
    }

    /**
     * Get the estimated gas cost of a transaction
     */
    async estimateGas(requestParameters: EstimateGasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GasEstimate> {
        const response = await this.estimateGasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get account details by address
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
     * Get account details by address
     */
    async getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the current recommended gas fees to use in a transaction
     */
    async getGasFeesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GasFees>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/gas/fees`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GasFeesFromJSON(jsonValue));
    }

    /**
     * Get the current recommended gas fees to use in a transaction
     */
    async getGasFees(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GasFees> {
        const response = await this.getGasFeesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get information about the running coinstack
     */
    async getInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseInfoFromJSON(jsonValue));
    }

    /**
     * Get information about the running coinstack
     */
    async getInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseInfo> {
        const response = await this.getInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * /_**   Get token metadata
     */
    async getTokenMetadataRaw(requestParameters: GetTokenMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenMetadata>> {
        if (requestParameters.contract === null || requestParameters.contract === undefined) {
            throw new runtime.RequiredError('contract','Required parameter requestParameters.contract was null or undefined when calling getTokenMetadata.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTokenMetadata.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getTokenMetadata.');
        }

        const queryParameters: any = {};

        if (requestParameters.contract !== undefined) {
            queryParameters['contract'] = requestParameters.contract;
        }

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/metadata/token`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenMetadataFromJSON(jsonValue));
    }

    /**
     * /_**   Get token metadata
     */
    async getTokenMetadata(requestParameters: GetTokenMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenMetadata> {
        const response = await this.getTokenMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction details
     */
    async getTransactionRaw(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tx>> {
        if (requestParameters.txid === null || requestParameters.txid === undefined) {
            throw new runtime.RequiredError('txid','Required parameter requestParameters.txid was null or undefined when calling getTransaction.');
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
     * Get transaction details
     */
    async getTransaction(requestParameters: GetTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tx> {
        const response = await this.getTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction history by address
     */
    async getTxHistoryRaw(requestParameters: GetTxHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseTxHistoryTx>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseTxHistoryTxFromJSON(jsonValue));
    }

    /**
     * Get transaction history by address
     */
    async getTxHistory(requestParameters: GetTxHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseTxHistoryTx> {
        const response = await this.getTxHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Broadcast signed raw transaction
     */
    async sendTxRaw(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.sendTxBody === null || requestParameters.sendTxBody === undefined) {
            throw new runtime.RequiredError('sendTxBody','Required parameter requestParameters.sendTxBody was null or undefined when calling sendTx.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/send`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendTxBodyToJSON(requestParameters.sendTxBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response) as any;
    }

    /**
     * Broadcast signed raw transaction
     */
    async sendTx(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.sendTxRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
