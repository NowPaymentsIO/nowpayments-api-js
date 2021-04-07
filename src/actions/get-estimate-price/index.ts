import ConnectApi from '../../utils/connect-api'
import { IGetEstimatePrice, Error } from '../../types'

export interface GetEstimatePriceReturn {
  currency_from: string
  amount_from: number
  currency_to: string
  estimated_amount: number
}

export interface GetEstimatePrice extends IGetEstimatePrice {
  apiKey: string
}

const getEstimatePrice = async ({
  apiKey,
  amount,
  currency_from,
  currency_to
}: GetEstimatePrice): Promise<GetEstimatePriceReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/estimate', { amount, currency_from, currency_to })
  return data
}

export default getEstimatePrice
