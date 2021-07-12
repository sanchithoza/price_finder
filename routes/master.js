const boom = require('boom')
const productMaster = require('./../models/productMaster')
const userMaster = require('../models/userMaster')
async function routes(fastify, options) {
    /*get all Master Record Routes*/
    fastify.get('/products', async(request, reply) => {
            //return newpost
            try {
                await productMaster.find().exec((err, result) => {
                    if (err) {
                        return reply.send(`Error reading ${err}`)
                    }
                    //  let response = [];
                    //response.push(result)
                    reply.send(result)

                });

            } catch (err) {
                throw boom.boomify(err)
            }
        })
        /*insert Master Record Routes*/
    fastify.post('/addProduct', async(request, reply) => {
        try {
            await productMaster.find(request.body).exec(async(err, result) => {
                if (err) {
                    return reply.send(`Error reading ${err}`)
                }
                if (result.length == 0) {
                    let product = new productMaster(request.body);
                    let newProduct = await product.save();
                    await reply.send(newProduct)
                } else {
                    await reply.send("Record Already Exists .")
                }
            });
        } catch (err) {
            throw boom.boomify(err)
        }
    })
    fastify.post('/addUser', async(request, reply) => {
        try {
            await userMaster.find(request.body).exec(async(err, result) => {
                if (err) {
                    return reply.send(`Error reading ${err}`)
                }
                if (result.length == 0) {
                    let user = new userMaster(request.body);
                    let newUser = await user.save();
                    await reply.send(newUser)
                } else {
                    await reply.send("Record Already Exists .")
                }
            });
        } catch (err) {
            throw boom.boomify(err)
        }
    })

    /*Get Product Where*/
    fastify.post('/getProductWhere', async(request, reply) => {
        try {
            //  console.log(`req${JSON.stringify(request.body)}`);
            await productMaster.find(request.body).exec((err, result) => {
                if (err) {
                    return reply.send(`Error reading ${err}`)
                }
                //  let response = [];
                //response.push(result)
                //console.log(result);
                //   console.log(result);
                reply.send(result)
            });

        } catch (err) {
            throw boom.boomify(err)
        }
        // await reply.send(request.body.hey)
    })
    fastify.post('/getProductById', async(request, reply) => {
        try {
            await productMaster.findById(request.body.id).exec((err, result) => {
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
        try {
            await productMaster.deleteOne(request.body).exec((err, result) => {
                if (err) {
                    return reply.send(`Error reading ${err}`)
                }

                // console.log(result);
                reply.send(result)
            });
        } catch (error) {
            throw boom.boomify(err)
        }
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


    //user login
    fastify.post('/login', async(request, reply) => {
        try {
            await userMaster.find(request.body).exec(async(err, result) => {
                console.log(result);
                if (err) {
                    return reply.send(`Error reading ${err}`)
                }
                if (result.length != 0) {
                    console.log(result);
                    return reply.send(result)
                } else {
                    console.log("no user found");
                }
            });
        } catch (err) {
            throw boom.boomify(err)
        }
    })


}

module.exports = routes