const store = require('./store');


function addCourse (body) {
    return store.add(body);
}

function getCourses(){
    return new Promise( (resolve, reject) => {
        resolve(store.list())
    });
}

function getCourse (id) {
    return new Promise( (resolve, reject) => {
        if(!id){
            reject('Invalid ID');
        }
        resolve(store.get())
    });
}

module.exports = {
    addCourse,
    getCourses,
    getCourse
}