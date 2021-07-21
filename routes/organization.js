const boom = require('boom');
const { result } = require('lodash');
const knex = require('./../knex');
async function routes(fastify, options) {
    fastify.post(`/addOrganization`, async(req, res) => {
        try {
            let org = await knex.select().table('tbl_organization').where({ "name": req.body.name }).then((result) => {
                return (result.length > 0) ? result : { alert: `Unable to find Record with Given Search Critarea(filter) from ${table} Table.` };
            });
            console.log(org)
            if (org.length > 0) {
                throw "organization already exists"
            }
            let organization_data = {
                "name": req.body.name,
                "email": req.body.email,
                "mobile": req.body.mobile
            }
            let organizarion_result = await knex('tbl_organization').insert(organization_data);
            if (Array.isArray(organizarion_result)) {
                let user_data = {
                    "email": req.body.email,
                    "mobile": req.body.mobile,
                    "user_name": req.body.user_name,
                    "role": req.body.role,
                    "password": req.body.password,
                    "access": req.body.role,
                    "organization_id": organizarion_result[0]
                }
                await knex('tbl_users').insert(user_data);
                res.status(200).send({ "message": "success" })
            }
        } catch (error) {
            res.status(400).send({ "message": error })
        }
    })
}
module.exports = routes