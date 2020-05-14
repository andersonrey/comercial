const Model = require('./model');

function addCourse(data) {
    const course = new Model(data);
    return  course.save();
}

function getCourses(){
    return Model.find();
}

function getCourse(id){
    return Model.findOne({
        _id: id
    });
}

module.exports = {
    add: addCourse,
    list: getCourses,
    get: getCourse
}