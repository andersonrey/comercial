const express = require('express');
const user = require('../components/user/network');
const customer = require('../components/customer/network');
const product = require('../components/product/network');
const sale = require('../components/sale/network');
const payment = require('../components/payment/network');

const routes = function (server){
    server.use('/user', user)
    server.use('/customer', customer)
    server.use('/product', product)
    server.use('/sale', sale)
    server.use('/payment', payment)
}

module.exports = routes;