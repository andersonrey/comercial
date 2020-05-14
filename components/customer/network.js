const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();
router.get('/', getCustomers);
router.get('/:id', getCustomer);
router.post('/', addCustomer);

function getCustomers (req, res, next){
    controller.getCustomers()
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        });
}

function getCustomer (req, res, next){
    controller.getCustomer(req.params.id)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        });
}

function addCustomer (req, res, next){
    controller.addCustomer(req.body)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        });
}


module.exports = router;