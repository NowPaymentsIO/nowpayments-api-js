import ConnectApi from '../../utils/connect-api'
import { Error } from '../../types'

export interface StatusReturn {
  message: string
}

const status = async (): Promise<StatusReturn | Error> => {
  const API = new ConnectApi({ apiKey: '' })

  const { data } = await API.get('/status')
  return data
}

export default status
