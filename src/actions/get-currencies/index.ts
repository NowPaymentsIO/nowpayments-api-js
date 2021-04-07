import ConnectApi from '../../utils/connect-api'
import { Error } from '../../types'

export interface GetCurrenciesReturn {
  currencies: [string]
}

const getCurrencies = async ({ apiKey }: { apiKey: string }): Promise<GetCurrenciesReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/currencies')
  return data
}

export default getCurrencies
