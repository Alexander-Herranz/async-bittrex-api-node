### Getting started
You can just install in your project and use it with:

```sh
$npm install async-bittrex-api-node --save
```
and simply require it where you need it in your node js application:
```sh
const async-bittrex-api-node = require ('async-bittrex-api-node')
```

https://www.npmjs.com/package/async-await-mongoclient-es6-promisify

# async-bittrex-api-node

async-bittrex-api-node is an open and clean ES6 class to connect with Bittrex,
the famous cryptocurrency exchange API, that you can easily use and even extend,
to use with async/await features available natively in node v8.

## API of functions:
Functions are pretty descriptive by their name. Same name as Bittrex endpoints.

#### Functions:
  - getmarkets()
  - getcurrencies()
  - getticker (pair1, pair2)
  - getmarketsummaries()
  - getmarketsummary(pair1, pair2)
  - getorderbook(pair1, pair2, type)
  - getmarkethistory(pair1, pair2)

#### Params
 - pair1/pair2: <String> Example: 'btc', 'eth', 'letc'...
 - type: <String> Example: "buy", "sell" or "both"


### Test the module yourself
In test/test.js you can see the basic use of the app. You can run this example with:
```sh
$npm install
$npm test
```

```sh
const {BittrexAPI} = require('./BittrexAPI')
let bittrexAPI = new BittrexAPI()

testAPI()

async function testAPI(){
  let pair1 = 'btc'
  let pair2 = 'eth'
  let type  = 'both'

  console.log('TEST 1: ')
  console.log( await bittrexAPI.getmarkets() )
  console.log('TEST 2: ')
  console.log( await bittrexAPI.getcurrencies() )
  console.log('TEST 3: ')
  console.log( await bittrexAPI.getticker(pair1, pair2) )
  console.log('TEST 4: ')
  console.log( await bittrexAPI.getmarketsummaries() )
  console.log('TEST 5: ')
  console.log( await bittrexAPI.getmarketsummary(pair1, pair2) )
  console.log('TEST 6: ')
  console.log( await bittrexAPI.getorderbook(pair1, pair2, type) )
  console.log('TEST 7: ')
  console.log( await bittrexAPI.getmarkethistory(pair1, pair2) )

}

```


### Motivation
I was just writting a node app with async/await features for fun, and find useful to have a library ready to do it (I didn't really find any useful in the web).

### Todos

 - Add private (token based) API functions
 - Any contribution will be appreciated.

License
----

MIT
