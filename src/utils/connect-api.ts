import axios, { AxiosInstance } from 'axios'

declare var process: {
  env: {
    SANDBOX: string
  }
}

class ConnectApi {
  apiKey: string
  api: AxiosInstance

  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey
    const usingSandbox = process.env.SANDBOX?.toLowerCase() === 'true'
    this.api = axios.create({
      baseURL: usingSandbox ? 'https://api.sandbox.nowpayments.io/v1' : 'https://api.nowpayments.io/v1/',
      timeout: 10000,
      headers: { 'x-api-key': apiKey },
      validateStatus: () => true,
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
