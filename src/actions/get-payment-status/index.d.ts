import { IGetPaymentStatus, Error } from '../../types';
export interface GetPaymentStatusReturn {
    payment_id: number;
    payment_status: string;
    pay_address: string;
    price_amount: number;
    price_currency: string;
    pay_amount: number;
    actually_paid: number;
    pay_currency: string;
    order_id: string;
    order_description: string;
    purchase_id: number;
    created_at: string;
    updated_at: string;
    outcome_amount: number;
    outcome_currency: string;
}
export interface GetPaymentStatus extends IGetPaymentStatus {
    apiKey: string;
}
declare const getPaymentStatus: ({ apiKey, payment_id }: GetPaymentStatus) => Promise<GetPaymentStatusReturn | Error>;
export default getPaymentStatus;
