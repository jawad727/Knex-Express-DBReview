
const db = require('../data/dbConfig.js')

module.exports = {
    getUser,
    getById,
    add
};


function getUser() {
    return db('users');
}

function getById(id) {
    return db('users').where({ id }).first()
}

function add(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        // return getById(ids[0])
        return ids
    })
}
