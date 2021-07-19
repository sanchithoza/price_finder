const boom = require('boom')
const knex = require('./../knex');
async function routes(fastify, options) {
    fastify.post(`/addOrganization`, (req, res) => {
        console.log(req.body);
        res.send(req.body)
    })
}
module.exports = routes