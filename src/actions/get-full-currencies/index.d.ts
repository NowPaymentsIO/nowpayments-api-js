import { Error } from '../../types';
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
declare const getCurrencies: ({ apiKey }: {
    apiKey: string;
}) => Promise<GetFullCurrenciesReturn | Error>;
export default getCurrencies;