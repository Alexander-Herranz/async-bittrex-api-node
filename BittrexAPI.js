const request = require("request")

class BittrexAPI {

  constructor(){
   this.url = 'https://bittrex.com/api/v1.1/public/'
   this._getMarkets = 'getMarkets'
   this._getcurrencies = 'getcurrencies'
   this._getticker = 'getticker'
   this._getmarketsummaries = 'getmarketsummaries'
   this._getmarketsummary = 'getmarketsummary'
   this._getorderbook = 'getorderbook'
   this._getmarkethistory = 'getmarkethistory'
  }

  doRequest(url) {
     return new Promise(function (resolve, reject) {
       request(url, function (error, res, body) {
         if (!error && res.statusCode == 200) {
           //console.log(body)
           resolve(body);
         } else {
           reject(error);
         }
       })
     }).catch((error) => {
      console.log(url + '--> Request error:');
      console.log(error)
    });
  }

//Bittrex Public API GET requests

  async getmarkets() {
    try{
      let endpoint = this.url+this._getMarkets
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getcurrencies() {
    try{
      let endpoint = this.url+this._getcurrencies
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getticker(pair1, pair2) {
    try{
      let market = pair1 + '-' + pair2
      let endpoint = this.url+this._getticker+'?'+'market='+market
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getmarketsummaries() {
    try{
      let endpoint = this.url+this._getmarketsummaries
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getmarketsummary(pair1, pair2) {
    try{
      let market = pair1 + '-' + pair2
      let endpoint = this.url+this._getmarketsummary+'?'+'market='+market
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getorderbook(pair1, pair2, type) {
    try{
      let market = pair1 + '-' + pair2
      let endpoint = this.url+this._getorderbook+'?'+'market='+market+'&'+'type='+type
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getmarkethistory(pair1, pair2) {
    try{
      let market = pair1 + '-' + pair2
      let endpoint = this.url+this._getmarkethistory+'?'+'market='+market
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }


}

exports.BittrexAPI = BittrexAPI;
