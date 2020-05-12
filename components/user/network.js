const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/', (req, res) => {
    
    controller.addUser(req.body.name)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Información Ivalidad', 400, 'Error en el controlador');
        }); 
});

router.get('/', (req, res) => {
    controller.getUsers()
        .then((userList) => {
            response.success(req, res, userList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
});



module.exports = router;