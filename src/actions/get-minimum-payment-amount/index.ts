import ConnectApi from '../../utils/connect-api'
import { IGetMinimumPaymentAmount, Error } from '../../types'

export interface GetMinimumPaymentAmountReturn {
  currency_from: string
  currency_to: string
  min_amount: number
}

export interface GetMinimumPaymentAmount extends IGetMinimumPaymentAmount {
  apiKey: string
}

const getMinimumPaymentAmount = async ({
  apiKey,
  currency_from,
  currency_to
}: GetMinimumPaymentAmount): Promise<GetMinimumPaymentAmountReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/min-amount', { currency_from, currency_to })
  return data
}

export default getMinimumPaymentAmount
