declare const _default: {
    status: () => Promise<import("./status").StatusReturn | import("../types").Error>;
    getCurrencies: ({ apiKey }: {
        apiKey: string;
    }) => Promise<import("../types").Error | import("./get-currencies").GetCurrenciesReturn>;
    getEstimatePrice: ({ apiKey, amount, currency_from, currency_to }: import("./get-estimate-price").GetEstimatePrice) => Promise<import("../types").Error | import("./get-estimate-price").GetEstimatePriceReturn>;
    createPayment: ({ apiKey, price_amount, price_currency, pay_amount, pay_currency, ipn_callback_url, order_id, order_description, purchase_id, payout_address, payout_currency, payout_extra_id, fixed_rate }: import("./create-payment").CreatePayment) => Promise<import("../types").Error | import("./create-payment").CreatePaymentReturn>;
    getPaymentStatus: ({ apiKey, payment_id }: import("./get-payment-status").GetPaymentStatus) => Promise<import("../types").Error | import("./get-payment-status").GetPaymentStatusReturn>;
    getMinimumPaymentAmount: ({ apiKey, currency_from, currency_to }: import("./get-minimum-payment-amount").GetMinimumPaymentAmount) => Promise<import("../types").Error | import("./get-minimum-payment-amount").GetMinimumPaymentAmountReturn>;
    getListPayments: ({ apiKey, limit, page, sortBy, orderBy, dateFrom, dateTo }: import("./get-list-payments").GetListPayments) => Promise<import("../types").Error | import("./get-list-payments").GetListPaymentsReturn>;
    createInvoice: ({ apiKey, price_amount, price_currency, pay_currency, ipn_callback_url, order_id, order_description, success_url, cancel_url }: import("./create-invoice").CreateInvoice) => Promise<import("../types").Error | import("./create-invoice").InvoiceReturn>;
};
export default _default;
