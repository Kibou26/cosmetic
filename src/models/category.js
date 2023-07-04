const db = require('../database/knexfile.js');

const Category = {
    getAll: () => {
        return db.select().from('category');
    },

    getById: (id) => {
        return db.select().from('category').where('id', id).first();
    },

    create: (name) => {
        return db.insert({ name }).into('category');
    },

    update: (id, name) => {
        return db('category').where('id', id).update({ name });
    },

    delete: (id) => {
        return db('category').where('id', id).delete();
    }
};

module.exports = Category;