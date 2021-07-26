const boom = require('boom')
const knex = require('./../knex');
const productMaster = require('./../models/productMaster')
const userMaster = require('../models/userMaster')
async function routes(fastify, options) {
    fastify.post(`/addUser`, (req, res) => {
        console.log(req.body);
    })
    fastify.post('/login', async(request, reply) => {
        await knex('tbl_users')
            .where({ "user_name": request.body.user_name, "password": request.body.password })
            .then(rows => {
                if (rows.length > 0) {
                    reply.status(200).send(rows)
                } else {
                    throw "Invalid User Name or Password !!";
                }
            }).catch(error => {
                reply.status(400).send(error)
            })



    })
}
module.exports = routes