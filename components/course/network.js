const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/',addCourse);
router.get('/',getCourses);
router.get('/:id',getCourse);

function addCourse (req, res) {
    
    controller.addCourse(req.body)
        .then((data)=>{
            response.success(req, res, data , 201);
        })
        .catch( e => {
        response.error(req, res, 'Invalidity Information', 400, 'Error in controller User');
        }); 
}

function getCourses (req, res) {
    controller.getCourses()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
}

function getCourse (req, res) {
    controller.getCourse( req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
}

module.exports = router;