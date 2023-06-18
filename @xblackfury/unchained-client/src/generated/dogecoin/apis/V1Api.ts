// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * @shapeshiftoss/dogecoin-api
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
  InternalServerError,
  NetworkFees,
  RawTx,
  SendTxBody,
  Tx,
  Utxo,
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
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    NetworkFeesFromJSON,
    NetworkFeesToJSON,
    RawTxFromJSON,
    RawTxToJSON,
    SendTxBodyFromJSON,
    SendTxBodyToJSON,
    TxFromJSON,
    TxToJSON,
    UtxoFromJSON,
    UtxoToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface GetAccountRequest {
    pubkey: string;
}

export interface GetRawTransactionRequest {
    txid: string;
}

export interface GetTransactionRequest {
    txid: string;
}

export interface GetTxHistoryRequest {
    pubkey: string;
    cursor?: string;
    pageSize?: number;
}

export interface GetUtxosRequest {
    pubkey: string;
}

export interface SendTxRequest {
    sendTxBody: SendTxBody;
}

/**
 * 
 */
export class V1Api extends runtime.BaseAPI {

    /**
     * Get account details by address or extended public key
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
     * Get account details by address or extended public key
     */
    async getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getAccountRaw(requestParameters, initOverrides);
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
     * Get current recommended network fees to use in a transaction
     */
    async getNetworkFeesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkFees>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/fees`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkFeesFromJSON(jsonValue));
    }

    /**
     * Get current recommended network fees to use in a transaction
     */
    async getNetworkFees(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkFees> {
        const response = await this.getNetworkFeesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get raw transaction details directly from the node
     */
    async getRawTransactionRaw(requestParameters: GetRawTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RawTx>> {
        if (requestParameters.txid === null || requestParameters.txid === undefined) {
            throw new runtime.RequiredError('txid','Required parameter requestParameters.txid was null or undefined when calling getRawTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/tx/{txid}/raw`.replace(`{${"txid"}}`, encodeURIComponent(String(requestParameters.txid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RawTxFromJSON(jsonValue));
    }

    /**
     * Get raw transaction details directly from the node
     */
    async getRawTransaction(requestParameters: GetRawTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RawTx> {
        const response = await this.getRawTransactionRaw(requestParameters, initOverrides);
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
     * Get transaction history by address or extended public key
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
     * Get transaction history by address or extended public key
     */
    async getTxHistory(requestParameters: GetTxHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseTxHistoryTx> {
        const response = await this.getTxHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all unspent transaction outputs for an address or extended public key
     */
    async getUtxosRaw(requestParameters: GetUtxosRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Utxo>>> {
        if (requestParameters.pubkey === null || requestParameters.pubkey === undefined) {
            throw new runtime.RequiredError('pubkey','Required parameter requestParameters.pubkey was null or undefined when calling getUtxos.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/account/{pubkey}/utxos`.replace(`{${"pubkey"}}`, encodeURIComponent(String(requestParameters.pubkey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UtxoFromJSON));
    }

    /**
     * Get all unspent transaction outputs for an address or extended public key
     */
    async getUtxos(requestParameters: GetUtxosRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Utxo>> {
        const response = await this.getUtxosRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends raw transaction to be broadcast to the node.
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
     * Sends raw transaction to be broadcast to the node.
     */
    async sendTx(requestParameters: SendTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.sendTxRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
