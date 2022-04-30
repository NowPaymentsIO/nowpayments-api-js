import ConnectApi from '../../utils/connect-api'
import { Error } from '../../types'

export interface GetAvailableCurrenciesReturn {
  currencies: [string]
}

const getAvailableCurrencies = async ({ apiKey }: { apiKey: string }): Promise<GetAvailableCurrenciesReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/merchant/coins')
  return data
}

export default getAvailableCurrencies
