import axios, { AxiosInstance } from 'axios'

class ConnectApi {
  apiKey: string
  api: AxiosInstance

  constructor({ apiKey, sandbox }: { apiKey: string, sandbox: boolean }) {
    this.apiKey = apiKey
    const 
    this.api = axios.create({
      baseURL: sandbox ? 'https://api.sandbox.nowpayments.io/v1' : 'https://api.nowpayments.io/v1/',
      timeout: 10000,
      headers: { 'x-api-key': apiKey },
      validateStatus: () => true
    })
  }

  async get(url: string, params?: object) {
    return await this.api.get(url, { params })
  }

  async post(url: string, params?: object) {
    return await this.api.post(url, { ...params })
  }
}

export default ConnectApi
