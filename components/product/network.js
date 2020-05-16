const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/',addProduct);
router.get('/',getProducts);
router.get('/:id',getProduct);

function addProduct (req, res) {
    
    controller.addProduct(req.body)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        }); 
}

function getProducts (req, res) {
    controller.getProducts()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
}

function getProduct (req, res) {
    controller.getProduct( req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
}

module.exports = router;