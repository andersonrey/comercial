const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/',addUser);
router.get('/',getUsers);

function addUser (req, res) {
    
    controller.addUser(req.body)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        }); 
}

function getUsers (req, res) {
    controller.getUsers()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
}

module.exports = router;