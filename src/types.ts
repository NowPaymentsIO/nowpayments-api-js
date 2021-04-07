export interface IGetEstimatePrice {
  amount: number
  currency_from: string
  currency_to: string
}

export interface ICreatePayment {
  price_amount: number
  price_currency: string
  pay_amount?: number
  pay_currency: string
  ipn_callback_url?: string
  order_id?: string
  order_description?: string
  purchase_id?: string
  payout_address?: string
  payout_currency?: string
  payout_extra_id?: string
  fixed_rate?: string
}

export interface IGetPaymentStatus {
  payment_id: string
}

export interface IGetMinimumPaymentAmount {
  currency_from: string
  currency_to: string
}

export interface IGetListPayments {
  limit?: number
  page?: number
  sortBy?: string
  orderBy?: string
  dateFrom?: string
  dateTo?: string
}

export interface ICreateInvoice {
  price_amount: number
  price_currency: string
  pay_currency?: string
  ipn_callback_url?: string
  order_id?: string
  order_description?: string
  success_url?: string
  cancel_url?: string
}

export interface Error {
  errors?: []
  message?: string
}
