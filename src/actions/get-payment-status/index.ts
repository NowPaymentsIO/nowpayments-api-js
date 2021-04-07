import ConnectApi from '../../utils/connect-api'
import { IGetPaymentStatus, Error } from '../../types'

export interface GetPaymentStatusReturn {
  payment_id: number
  payment_status: string
  pay_address: string
  price_amount: number
  price_currency: string
  pay_amount: number
  actually_paid: number
  pay_currency: string
  order_id: string
  order_description: string
  purchase_id: number
  created_at: string
  updated_at: string
  outcome_amount: number
  outcome_currency: string
}

export interface GetPaymentStatus extends IGetPaymentStatus {
  apiKey: string
}

const getPaymentStatus = async ({ apiKey, payment_id }: GetPaymentStatus): Promise<GetPaymentStatusReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get(`/payment/${payment_id}`)
  return data
}

export default getPaymentStatus
