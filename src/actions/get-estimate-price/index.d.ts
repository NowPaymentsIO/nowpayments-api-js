import { IGetEstimatePrice, Error } from '../../types';
export interface GetEstimatePriceReturn {
    currency_from: string;
    amount_from: number;
    currency_to: string;
    estimated_amount: number;
}
export interface GetEstimatePrice extends IGetEstimatePrice {
    apiKey: string;
}
declare const getEstimatePrice: ({ apiKey, amount, currency_from, currency_to }: GetEstimatePrice) => Promise<GetEstimatePriceReturn | Error>;
export default getEstimatePrice;
