const store = require('./store');
const bcrypt = require('bcrypt');


function addUser (body) {

    let { name, email, password, role } = body;
    let user = {
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      role
    };
    return store.add(user);
}

function getUsers(){
    return new Promise( (resolve, reject) => {
        resolve(store.list())
    });
}

module.exports = {
    addUser,
    getUsers
}