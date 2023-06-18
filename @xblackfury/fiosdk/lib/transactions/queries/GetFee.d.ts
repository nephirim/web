import { FioFeeResponse } from '../../entities/FioFeeResponse';
import { Query } from './Query';
export declare class GetFee extends Query<FioFeeResponse> {
    ENDPOINT: string;
    endPoint: string;
    fioAddress: string;
    constructor(endPoint: string, fioAddress?: string);
    getData(): Promise<{
        end_point: string;
        fio_address: string | null;
    }>;
}
