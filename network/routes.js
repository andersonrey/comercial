const express = require('express');
const user = require('../components/user/network');
const customer = require('../components/customer/network');

const routes = function (server){
    server.use('/user', user)
    server.use('/customer', customer)
}

module.exports = routes;