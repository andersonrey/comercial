const Model = require('./model');

function addUser(data) {
    const user = new Model(data);
   return  user.save();
}

function getUsers(){
    return Model.find();
}

module.exports = {
    add: addUser,
    list: getUsers
}