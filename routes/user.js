const boom = require('boom')
const knex = require('./../knex');
const productMaster = require('./../models/productMaster')
const userMaster = require('../models/userMaster')
async function routes(fastify, options) {
    fastify.post(`/addUser`, (req, res) => {
        console.log(req.body);
    })
}
module.exports = routes