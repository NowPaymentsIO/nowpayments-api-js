# NOWPayments API

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A library for interacting with the NOWPayments API.

## Installation

Using npm:

```bash
$ npm install axios
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

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NOWPayments API - HTML Example</title>
  <script src="../../dist/nowpayments-api-js.min.js"></script>
</head>

<body>
  <h4>Available currencies</h4>
  <script>
    const body = document.body;
    const api = new NOWPaymentsApi({ apiKey: 'A7M40XV-CG1448Z-KVVED3G-NW3V0TK' }) // your api key

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
