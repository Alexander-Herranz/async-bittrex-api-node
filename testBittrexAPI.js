const {BittrexAPI} = require('./BittrexAPI')
let bittrexAPI = new BittrexAPI()

testAPI()

async function testAPI(){
  let pair1 = 'btc'
  let pair2 = 'eth'
  let type  = 'both'//buy, sell or both

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
