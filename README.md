# vita-wallet-payment-gateway

[Website](https://vitawallet.io/) |
[Instagram](https://instagram.com/vitawallet) |
[Twitter](https://twitter.com/vitawallet) |
[Telegram](https://t.me/vitaio)

The [vita-wallet-payment-gateway](https://app.vitawallet.io/) is a library that allows integrating from external sites the possibility of receiving payments in our [VitaWallet](https://app.vitawallet.io).

## Installation

In a browser:
```html
<script src="https://app.vitawallet.io/vita-wallet-payment-gateway.js"></script>
```

Using npm:
```shell
$ npm install --save @vitawallet/vita-wallet-payment-gateway
```

In Node.js:
```js
var paymentGateway = require('@vitawallet/vita-wallet-payment-gateway');
```

In ReactJS:
```js
import { paymentGateway } from '@vitawallet/vita-wallet-payment-gateway';
```

## How to use?

Example in ReactJS:
```js
<button
onClick={() => paymentGateway(email, amount, ENV, token)}>
    Pagar con VitaWallet
</button>
```

## Arguments

These are the arguments available on the payment button.

 * email -> Your email address in VitaWallet. Ex: 'soporte@vitawallet.io'
 * amount -> Payment amount. Ex: 100.
 * env -> Enviroment 'qa' or 'prod'. (optional)
 * token -> Token identification of the transaction. (optional)
