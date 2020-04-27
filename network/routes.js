const express = require('express');
const user = require('../components/user/network');
const customer = require('../components/customer/network');
const course = require('../components/course/network');

const routes = function (server){
    server.use('/user', user)
    server.use('/customer', customer)
    server.use('/course', course)
}

module.exports = routes;