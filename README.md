# NOWPayments API

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A library for interacting with the NOWPayments API.

## Installation

Using npm:

```bash
$ npm install @nowpaymentsio/nowpayments-api-js
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/@nowpaymentsio/nowpayments-api-js/dist/nowpayments-api-js.min.js"></script>
```

## Examples

### Node JS

```js
const NowPaymentsApi = require('@nowpaymentsio/nowpayments-api-js');

const api = new NowPaymentsApi({ apiKey: 'A7M40XV-CG1448Z-KVVED3G-NW3V0TK' }) // your api key
async function logCurrencies() {
  const { currencies } = await api.getCurrencies()
  console.log(currencies)
}
logCurrencies()
```

### React

```js
import React from 'react'
import NowPaymentsApi from '@nowpaymentsio/nowpayments-api-js'

const npApi = new NowPaymentsApi({ apiKey: 'A7M40XV-CG1448Z-KVVED3G-NW3V0TK' }) // your api key

const App = () => {
  const [currenciesArr, setCurrenciesArr] = React.useState([])
  React.useEffect(() => {
    async function fetchCurrencies() {
      const { currencies } = await npApi.getCurrencies()
      setCurrenciesArr(currencies)
    }
    fetchCurrencies()
  }, [])

  return (
    <div>
      <h2>Available currencies</h2>
      <br />
      {currenciesArr.map((currency) => (
        <p>{currency}</p>
      ))}
    </div>
  )
}

export default App
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NOWPayments API - HTML Example</title>
  <script src="https://unpkg.com/@nowpaymentsio/nowpayments-api-js/dist/nowpayments-api-js.min.js"></script>
</head>

<body>
  <h4>Available currencies</h4>
  <script>
    const body = document.body;
    const api = new NOWPaymentsApiJS({ apiKey: 'A7M40XV-CG1448Z-KVVED3G-NW3V0TK' }) // your api key

    async function fetchCurrencies() {
      const { currencies } = await api.getCurrencies()
        const selectList = document.createElement("select")
        selectList.id = "mySelect"
        body.appendChild(selectList)

      for (var i = 0; i < currencies.length; i++) {
        const option = document.createElement("option")
        option.value = currencies[i]
        option.text = currencies[i]
        selectList.appendChild(option)
      }
    }
    fetchCurrencies()
  </script>
</body>
</html>
```
## Methods
&nbsp;
#### NPApi.status()
Get API status
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
&nbsp; | &nbsp;       | &nbsp;           | &nbsp;

#### NPApi.getCurrencies()
Get available currencies
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
&nbsp; | &nbsp;       | &nbsp;           | &nbsp;

#### NPApi.getEstimatePrice(params)
Get estimated price
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
amount | null | true | Initial cost in the fiat currency

#### NPApi.createPayment(params)
Create payment
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
price_amount | null | true | Fiat equivalent of the price to be paid in crypto
price_currency | null | true | Fiat currency in which the price_amount is specified (usd, eur, etc)
pay_amount | null | false | Amount that users have to pay for the order stated in crypto
pay_currency | null | true | Crypto currency in which the pay_amount is specified (btc, eth, etc)
ipn_callback_url | null | false | Url to receive callbacks, should contain "http" or "https", eg. "https://nowpayments.io"
order_id | null | false | Inner store order ID, e.g. "RGDBP-21314"
order_description | null | false | Inner store order description, e.g. "Apple Macbook Pro 2019 x 1"
purchase_id | null | false | Id of purchase for which you want to create aother
payout_address | null | false | Usually the funds will go to the address you specify in your Personal account. In case you want to receive funds on another address, you can specify it in this parameter
payout_currency | null | false | Currency of your external payout_address, required when payout_adress is specified
payout_extra_id | null | false | Extra id or memo or tag for external payout_address
fixed_rate | null | false | Boolean, can be true or false. Required for fixed-rate exchanges

#### NPApi.getPaymentStatus(params)
Get payment status
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
payment_id | null | true | ID of the payment

#### NPApi.getMinimumPaymentAmount(params)
Get the minimum payment amount
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
currency_from | null | true | Ticker currency
currency_to | null | true | Ticker currency

#### NPApi.getListPayments(params)
Get list of payments
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
limit | 10 | false | Number of records in one page
page | 0 | false | Page number you want to get
sortBy | created_at | false | Sort the received list by a paramenter.
orderBy | asc | false | Display the list in ascending or descending order
dateFrom | null | false | Select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ)
dateTo | null | false | Select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ)

#### NPApi.createInvoice(params)
Create invoice
**params**       | **default** | **required** | **description**                                        
------------------|-------------|--------------|--------------------------------------------------------                                   
price_amount | null | true | He amount that users have to pay for the order stated in fiat currency. In case you do not indicate the price in crypto, our system will automatically convert this fiat amount in crypto equivalent
price_currency | null | true | The fiat currency in which the price_amount is specified (usd, eur, etc)
pay_currency | null | false | The crypto currency in which the pay_amount is specified (btc, eth, etc).If not specified, can be choosen on the invoice_url
ipn_callback_url | null | false | Url to receive callbacks, should contain "http" or "https", eg. "https://nowpayments.io"
order_id | null | false | Inner store order ID, e.g. "RGDBP-21314"
order_description | null | false | Inner store order description, e.g. "Apple Macbook Pro 2019 x 1"
success_url | null | false | Url where the customer will be redirected after sucesfull payment
cancel_url | null | false | Url where the customer will be redirected after failed payment

## Resources

* [Documentation API](https://documenter.getpostman.com/view/7907941/S1a32n38)