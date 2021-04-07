import NP from './actions'

import {
  ICreatePayment,
  IGetEstimatePrice,
  IGetPaymentStatus,
  IGetMinimumPaymentAmount,
  IGetListPayments,
  ICreateInvoice
} from './types'

class NOWPaymentsApi {
  readonly apiKey: string

  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey
  }

  async status() {
    return await NP.status()
  }

  async getCurrencies() {
    return await NP.getCurrencies({ apiKey: this.apiKey })
  }

  async getEstimatePrice({ amount, currency_from, currency_to }: IGetEstimatePrice) {
    return await NP.getEstimatePrice({ apiKey: this.apiKey, amount, currency_from, currency_to })
  }

  async createPayment({
    price_amount,
    price_currency,
    pay_amount,
    pay_currency,
    ipn_callback_url,
    order_id,
    order_description,
    purchase_id,
    payout_address,
    payout_currency,
    payout_extra_id,
    fixed_rate
  }: ICreatePayment) {
    return await NP.createPayment({
      apiKey: this.apiKey,
      price_amount,
      price_currency,
      pay_amount,
      pay_currency,
      ipn_callback_url,
      order_id,
      order_description,
      purchase_id,
      payout_address,
      payout_currency,
      payout_extra_id,
      fixed_rate
    })
  }

  async getPaymentStatus({ payment_id }: IGetPaymentStatus) {
    return await NP.getPaymentStatus({ apiKey: this.apiKey, payment_id })
  }

  async getMinimumPaymentAmount({ currency_from, currency_to }: IGetMinimumPaymentAmount) {
    return await NP.getMinimumPaymentAmount({ apiKey: this.apiKey, currency_from, currency_to })
  }

  async getListPayments({ limit, page, sortBy, orderBy, dateFrom, dateTo }: IGetListPayments = {}) {
    return await NP.getListPayments({ apiKey: this.apiKey, limit, page, sortBy, orderBy, dateFrom, dateTo })
  }

  async createInvoice({
    price_amount,
    price_currency,
    pay_currency,
    ipn_callback_url,
    order_id,
    order_description,
    success_url,
    cancel_url
  }: ICreateInvoice) {
    return await NP.createInvoice({
      apiKey: this.apiKey,
      price_amount,
      price_currency,
      pay_currency,
      ipn_callback_url,
      order_id,
      order_description,
      success_url,
      cancel_url
    })
  }
}

export = NOWPaymentsApi
