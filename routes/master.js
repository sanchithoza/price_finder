const boom = require('boom')
const knex = require('./../knex');
const productMaster = require('./../models/productMaster')
const userMaster = require('../models/userMaster')
async function routes(fastify, options) {
    fastify.post(`/addOrganization1`, (req, res) => {
            console.log(req.body);
            res.send(req.body)
        })
        /*get all Master Record Routes*/
    fastify.get('/products', async(request, reply) => {
        console.log(request.body);
        //return newpost
        knex.select().table('tbl_products').then((result) => {
            console.log(result);
            if (result.length) {
                reply.status(200).send(result);
            } else {
                reply.status(200).send({ "result": "No Record Available" })
            }
        }).catch((error) => {
            console.log(error);
            reply.status(400).send(error);
        })
    })
    fastify.post('/products', async(request, reply) => {
        console.log(request.body);
        //return newpost
        knex.select().table('tbl_products').where({ "organization_id": request.body.organization_id }).then((result) => {
            console.log(result);
            if (result.length) {
                reply.status(200).send(result);
            } else {
                reply.status(200).send({ "result": "No Record Available" })
            }
        }).catch((error) => {
            console.log(error);
            reply.status(400).send(error);
        })
    })
    fastify.get('/users', async(request, reply) => {
            //return newpost
            knex.select().table('tbl_users').then((result) => {
                if (result.length) {
                    reply.status(200).send(result)
                } else {
                    reply.status(200).send({ "result": "No Record Available" })
                }
            }).catch((error) => {
                console.log(error);
                reply.status(400).send(error);
            })
        })
        /*insert Master Record Routes*/
    fastify.post('/addProduct', async(request, reply) => {
        knex.table('tbl_products').insert(request.body).then((result) => {
            console.log(result);
            reply.status(200).send({ "result": "insert user success" })
        }).catch((error) => {
            console.log(error);
            reply.status(400).send(error)
        })
    })
    fastify.post('/addUser', async(request, reply) => {
        knex('tbl_users').insert(request.body).then((result) => {
            console.log(result);
            reply.status(200).send({ "result": "insert user success" })
        }).catch((error) => {
            console.log(error);
            reply.status(400).send(error)
        })
    })


    fastify.post('/getUserWhere', async(request, reply) => {

    })
    fastify.get('/getProductById/:id', async(request, reply) => {
        knex.select().where({ "id": request.params.id }).table('tbl_products').then((result) => {
            console.log(result);
            if (result.length) {
                reply.status(200).send(result);
            } else {
                reply.status(200).send({ "result": "No Record Available" })
            }
        }).catch((error) => {
            console.log(error);
            reply.status(400).send(error);
        })
    })
    fastify.post('/getUserById', async(request, reply) => {
        try {
            await userMaster.findById(request.body.id).exec((err, result) => {
                if (err) {
                    return reply.send(`Error reading ${err}`)
                }
                reply.send(result)
            })
        } catch (error) {
            throw boom.boomify(err)
        }
    })

    fastify.post('/deleteProduct', async(request, reply) => {
        console.log(request.body);
        knex.del().where({ "id": request.body.id }).table("tbl_products").then((result) => {
            console.log(result);
            reply.status(200).send(result)
        }).catch((error) => {
            console.log(error);
            reply.status(200).send(error)
        })
    })
    fastify.post('/deleteUser', async(request, reply) => {

    })

    fastify.post('/updateProduct', async(request, reply) => {
        try {
            data = request.body
            console.log(request.body);
            let doc = await productMaster.findOneAndUpdate({ "_id": data._id }, //filter
                {
                    "company": data.company,
                    "category": data.category,
                    "subCategory": data.subCategory,
                    "modelNumber": data.modelNumber,
                    "discription": data.discription,
                    "dealerPrice": data.dealerPrice,
                    "customerPrice": data.customerPrice
                }, // fields to update 
                {
                    new: true
                });
            reply.send(doc)

        } catch (err) {
            throw boom.boomify(err)
        }
    })
    fastify.post('/updateUser', async(request, reply) => {
        try {
            data = request.body
            console.log(request.body);
            let doc = await userMaster.findOneAndUpdate({ "_id": data._id }, //filter
                {
                    "fullName": data.fullName,
                    "role": data.role,
                    "mobile": data.mobile,
                    "email": data.email,
                    "password": data.password,
                }, // fields to update 
                {
                    new: true
                });

            reply.send(doc)

        } catch (err) {
            throw boom.boomify(err)
        }
    })


    //user login



}

module.exports = routes