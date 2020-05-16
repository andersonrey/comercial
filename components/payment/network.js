const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/',addPayment);
router.get('/',getPayments);
router.get('/:id',getPayment);

function addPayment (req, res) {
    controller.addPayment(req.body)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller Payment');
        }); 
}

function getPayments (req, res) {
    controller.getPayments()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
}

function getPayment (req, res) {
    controller.getPayment( req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
}

module.exports = router;