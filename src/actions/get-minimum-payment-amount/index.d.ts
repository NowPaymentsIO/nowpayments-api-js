import { IGetMinimumPaymentAmount, Error } from '../../types';
export interface GetMinimumPaymentAmountReturn {
    currency_from: string;
    currency_to: string;
    min_amount: number;
}
export interface GetMinimumPaymentAmount extends IGetMinimumPaymentAmount {
    apiKey: string;
}
declare const getMinimumPaymentAmount: ({ apiKey, currency_from, currency_to }: GetMinimumPaymentAmount) => Promise<GetMinimumPaymentAmountReturn | Error>;
export default getMinimumPaymentAmount;
