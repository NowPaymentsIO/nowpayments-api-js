import ConnectApi from '../../utils/connect-api'
import { Error } from '../../types'

export interface GetFullCurrenciesReturn {
  currencies: [Partial<FullCurrency>]
}

export interface FullCurrency {
  id: number
  code: string
  name: string
  enable: boolean
  wallet_regex: string
  priority: number
  extra_id_exists: boolean
  extra_id_regex: string | null
  logo_url: string
  track: boolean
  cg_id: string
  is_maxlimit: boolean
  network: string
  smart_contract: string | null
  network_precision: number | null
}

const getFullCurrencies = async ({ apiKey }: { apiKey: string }): Promise<GetFullCurrenciesReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/full-currencies')
  return data
}

export default getFullCurrencies
