import ConnectApi from '../../utils/connect-api'
import { ICreateInvoice, Error } from '../../types'

export interface InvoiceReturn {
  id: number
  order_id: string
  order_description: string
  price_amount: number
  price_currency: string
  pay_currency: string | null
  ipn_callback_url: string
  invoice_url: string
  success_url: string
  cancel_url: string
  created_at: string
  updated_at: string
}

export interface CreateInvoice extends ICreateInvoice {
  apiKey: string
}

const createInvoice = async ({
  apiKey,
  price_amount,
  price_currency,
  pay_currency,
  ipn_callback_url,
  order_id,
  order_description,
  success_url,
  cancel_url
}: CreateInvoice): Promise<InvoiceReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.post('/invoice', {
    price_amount,
    price_currency,
    pay_currency,
    ipn_callback_url,
    order_id,
    order_description,
    success_url,
    cancel_url
  })
  return data
}

export default createInvoice
