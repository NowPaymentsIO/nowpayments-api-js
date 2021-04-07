import { IGetMinimumPaymentStatus, Error } from '../../types';
export interface GetMinimumPaymentStatusReturn {
    currency_from: string;
    currency_to: string;
    min_amount: number;
}
export interface GetMinimumPaymentStatus extends IGetMinimumPaymentStatus {
    apiKey: string;
}
declare const getMinimumPaymentStatus: ({ apiKey, currency_from, currency_to }: GetMinimumPaymentStatus) => Promise<GetMinimumPaymentStatusReturn | Error>;
export default getMinimumPaymentStatus;
