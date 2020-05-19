const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', getSales);
router.get('/:id', getSale);
router.post('/', addSale);
router.put('/:id', updateSale);

function getSales (req, res, next){
    controller.getSales()
        .then((data)=>{
            response.success(req, res, data , 200);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        });
}

function getSale (req, res, next){
    controller.getSale(req.params.id)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        });
}

function addSale (req, res, next){
    
    controller.addSale(req.body)
        .then((data)=>{
            response.success(req, res, data , 200);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        });
}

function updateSale (req, res, next){
    controller.updateSale(req.params.id, req.body)
        .then((data)=>{
            response.success(req, res, data , 200);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        });
}


module.exports = router;