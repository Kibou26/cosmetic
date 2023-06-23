/*
import knex from 'knex';
import config from './knexfile.js';

const db = knex(config.development);

db.raw('SELECT 1')
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Failed to connect to the database:', error);
    });