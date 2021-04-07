import { ICreatePayment, IGetEstimatePrice, IGetPaymentStatus, IGetMinimumPaymentAmount, IGetListPayments, ICreateInvoice } from './types';
declare class NOWPaymentsApi {
    readonly apiKey: string;
    constructor({ apiKey }: {
        apiKey: string;
    });
    status(): Promise<import("./actions/status").StatusReturn | import("./types").Error>;
    getCurrencies(): Promise<import("./types").Error | import("./actions/get-currencies").GetCurrenciesReturn>;
    getEstimatePrice({ amount, currency_from, currency_to }: IGetEstimatePrice): Promise<import("./types").Error | import("./actions/get-estimate-price").GetEstimatePriceReturn>;
    createPayment({ price_amount, price_currency, pay_amount, pay_currency, ipn_callback_url, order_id, order_description, purchase_id, payout_address, payout_currency, payout_extra_id, fixed_rate }: ICreatePayment): Promise<import("./types").Error | import("./actions/create-payment").CreatePaymentReturn>;
    getPaymentStatus({ payment_id }: IGetPaymentStatus): Promise<import("./types").Error | import("./actions/get-payment-status").GetPaymentStatusReturn>;
    getMinimumPaymentAmount({ currency_from, currency_to }: IGetMinimumPaymentAmount): Promise<import("./types").Error | import("./actions/get-minimum-payment-amount").GetMinimumPaymentAmountReturn>;
    getListPayments({ limit, page, sortBy, orderBy, dateFrom, dateTo }?: IGetListPayments): Promise<import("./types").Error | import("./actions/get-list-payments").GetListPaymentsReturn>;
    createInvoice({ price_amount, price_currency, pay_currency, ipn_callback_url, order_id, order_description, success_url, cancel_url }: ICreateInvoice): Promise<import("./types").Error | import("./actions/create-invoice").InvoiceReturn>;
}
export = NOWPaymentsApi;
