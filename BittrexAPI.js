const request = require('request');
const hmac_sha512 = require('crypto-js/hmac-sha512');

const url = {

    publicUrl: 'https://bittrex.com/api/v1.1/public/',
    privateUrl: 'https://bittrex.com/api/v1.1/account/',

    //Public
    getMarkets: 'getMarkets',
    getcurrencies: 'getcurrencies',
    getticker: 'getticker',
    getmarketsummaries: 'getmarketsummaries',
    getmarketsummary: 'getmarketsummary',
    getorderbook: 'getorderbook',
    getmarkethistory: 'getmarkethistory',

    //Private
    getorderhistory: 'getorderhistory'
};


class Bittrex {

    /**
     * @param obj
     */
    constructor(obj) {

        this.apiKey = obj.apiKey;
        this.apiSecret = obj.apiSecret;

    }

    doRequest(uri) {

        let headers = {};

        //add apisign only if is a private call
        if (uri.split('account').length > 1) {
            let apisign = hmac_sha512(uri, this.apiSecret);
            headers = {apisign};
        }

        return new Promise(function (resolve, reject) {
            request({
                uri,
                headers

            }, function (error, res, body) {
                if (!error && res.statusCode === 200) {
                    resolve(body);
                } else {
                    reject(error);
                }
            })
        }).catch((error) => {
            console.log(uri + '--> Request error:');
            console.log(error)
        });
    }


    getObjectParams() {
        return {
            apikey: this.apiKey,
            apiSecret: this.apiSecret,
            nonce: Bittrex.getNonce()
        }
    }


    //Static functions

    static getNonce() {
        return Math.floor(new Date().getTime() / 1000);
    }


    static generateUri(uri, obj) {

        for (let key in obj) {

            if (obj.hasOwnProperty(key)) {
                let re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
                let separator = uri.indexOf('?') !== -1 ? "&" : "?";

                if (uri.match(re)) {
                    uri = uri.replace(re, '$1' + key + "=" + obj[key] + '$2');
                } else {
                    uri = uri + separator + key + "=" + obj[key];
                }
            }

        }

        return uri;
    }


    // Public API GET requests

    async getmarkets() {
        try {
            let endpoint = url.publicUrl + url.getMarkets;
            console.log(endpoint);
            return await this.doRequest(endpoint)
        } catch (error) {
            console.log(error);
        }
    }

    async getcurrencies() {
        try {
            let endpoint = url.publicUrl + url.getcurrencies;
            console.log(endpoint);
            return await this.doRequest(endpoint)
        } catch (error) {
            console.log(error);
        }
    }

    async getticker(pair1, pair2) {
        try {
            let market = pair1 + '-' + pair2;
            let endpoint = url.publicUrl + url.getticker + '?' + 'market=' + market;
            console.log(endpoint);
            return await this.doRequest(endpoint)
        } catch (error) {
            console.log(error);
        }
    }

    async getmarketsummaries() {
        try {
            let endpoint = url.publicUrl + url.getmarketsummaries;
            return await this.doRequest(endpoint)
        } catch (error) {
            console.log(error);
        }
    }

    async getmarketsummary(pair1, pair2) {
        try {
            let market = pair1 + '-' + pair2;
            let endpoint = url.publicUrl + url.getmarketsummary + '?' + 'market=' + market;
            return await this.doRequest(endpoint)
        } catch (error) {
            console.log(error);
        }
    }

    async getorderbook(pair1, pair2, type) {
        try {
            let market = pair1 + '-' + pair2;
            let endpoint = url.publicUrl + url.getorderbook + '?market=' + market + '&type= ' + type;
            return await this.doRequest(endpoint)
        } catch (error) {
            console.log(error);
        }
    }

    async getmarkethistory(pair1, pair2) {
        try {
            let market = pair1 + '-' + pair2;
            let endpoint = url.publicUrl + url.getmarkethistory + '?market=' + market;
            return await this.doRequest(endpoint)
        } catch (error) {
            console.log(error);
        }
    }


    //Private API requests

    async getorderhistory() {
        try {

            let endpoint = Bittrex.generateUri(url.privateUrl + url.getorderhistory, this.getObjectParams());

            return await this.doRequest(endpoint);

        } catch (error) {
            console.log(error);
        }

    }


}

exports.Bittrex = Bittrex;
