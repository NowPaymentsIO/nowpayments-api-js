const NOWPaymentsApi = require('@nowpayments/nowpayments-api')

const NPApi = new NOWPaymentsApi({ apiKey: 'A7M40XV-CG1448Z-KVVED3G-NW3V0TK' })

async function main() {
  console.log('NOWPayments API - Example Node')
  const { currencies } = await NPApi.getCurrencies()
  console.log('Available currencies: ', currencies)
}

main()
