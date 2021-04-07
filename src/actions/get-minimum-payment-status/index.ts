import ConnectApi from '../../utils/connect-api'
import { IGetMinimumPaymentStatus, Error } from '../../types'

export interface GetMinimumPaymentStatusReturn {
  currency_from: string
  currency_to: string
  min_amount: number
}

export interface GetMinimumPaymentStatus extends IGetMinimumPaymentStatus {
  apiKey: string
}

const getMinimumPaymentStatus = async ({
  apiKey,
  currency_from,
  currency_to
}: GetMinimumPaymentStatus): Promise<GetMinimumPaymentStatusReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/min-amount', { currency_from, currency_to })
  return data
}

export default getMinimumPaymentStatus
