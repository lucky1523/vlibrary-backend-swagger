const getUsers = require('./get-users');
const getTodo = require('./get-todo');
const createUser = require('./create-user');
const getLibros = require('./get-libros');
const getUserId = require('./get-user-id');
const updateUser = require('./update-user');
const deleteUser = require('./delete-user');
const createLogin = require('./create-login');
const createRegister = require('./create-register');
const getLibroId = require('./get-libro-id');
const getBoleta = require('./get-boleta');


module.exports = {
    paths:{
        '/users':{
            ...getUsers,
            ...createUser,
            ...updateUser,
            ...deleteUser
        },

        '/users/{id}':{
            ...getUserId
        },
        '/login':{
            ...createLogin
        },
        '/register':{
            ...createRegister
        },
        '/libros':{
            ...getLibros
        },
        '/libros/{id}':{
            ...getLibroId
        },
        '/boletas':{
            ...getBoleta
        }
    }
}