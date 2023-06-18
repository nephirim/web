import { AvailabilityResponse } from '../../entities/AvailabilityResponse';
import { Query } from './Query';
export declare class AvailabilityCheck extends Query<AvailabilityResponse> {
    ENDPOINT: string;
    fioName: string;
    constructor(fioName: string);
    getData(): Promise<{
        fio_name: string;
    }>;
}
