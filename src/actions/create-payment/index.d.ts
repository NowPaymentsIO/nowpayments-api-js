import { ICreatePayment, Error } from '../../types';
export interface CreatePaymentReturn {
    payment_id: number;
    payment_status: string;
    pay_address: string;
    price_amount: number;
    price_currency: string;
    pay_amount: number;
    pay_currency: string;
    order_id: string;
    order_description: string;
    ipn_callback_url: string;
    created_at: string;
    updated_at: string;
    purchase_id: number;
}
export interface CreatePayment extends ICreatePayment {
    apiKey: string;
}
declare const createPayment: ({ apiKey, price_amount, price_currency, pay_amount, pay_currency, ipn_callback_url, order_id, order_description, purchase_id, payout_address, payout_currency, payout_extra_id, fixed_rate }: CreatePayment) => Promise<CreatePaymentReturn | Error>;
export default createPayment;
