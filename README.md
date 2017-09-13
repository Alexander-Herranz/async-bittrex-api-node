### Getting started
You can just install in your project and use it with:

```sh
$npm install async-bittrex-api-node --save
```


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
In testBittrexAPi.js you can see the basic use of the app. You can run this example with:
```sh
$npm install
```

if you want to use the private api:

Rename .env-test in .env and add your private and secret keys .

```sh
  let pair1 = 'btc';
  let pair2 = 'eth';
  let type  = 'both';

  console.log('PUBLIC');

  console.log('TEST 1: ');
  console.log( await bittrex.getmarkets() );
  console.log('TEST 2: ');
  console.log( await bittrex.getcurrencies() );
  console.log('TEST 3: ');
  console.log( await bittrex.getticker(pair1, pair2) );
  console.log('TEST 4: ');
  console.log( await bittrex.getmarketsummaries() );
  console.log('TEST 5: ');
  console.log( await bittrex.getmarketsummary(pair1, pair2) );
  console.log('TEST 6: ');
  console.log( await bittrex.getorderbook(pair1, pair2, type) );
  console.log('TEST 7: ');
  console.log( await bittrex.getmarkethistory(pair1, pair2) );


  console.log('PRIVATE');

  console.log('TEST 8: ');
  console.log(await bittrex.getorderhistory());

```

### Todos

 - Only one private API function is implemented.
 - Any contribution will be appreciated.

License
----

MIT
