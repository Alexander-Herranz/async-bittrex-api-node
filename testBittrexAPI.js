const {Bittrex} = require('./BittrexAPI');
require('dotenv').config();


const apiKey = process.env.APIKEY;
const apiSecret = process.env.APISECRET;


let bittrex = new Bittrex({apiKey, apiSecret});

testAPI();

async function testAPI(){
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
  console.log(await bittrex.getbalance({currency:'BTC'}));

  console.log('TEST 9: ');
  console.log(await bittrex.getbalances());

  console.log('TEST 10: ');
  console.log(await bittrex.getorderhistory());

}


