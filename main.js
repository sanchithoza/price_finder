const fastifyImp = require("fastify");
const fastify = fastifyImp({
    logger: false
});


const db = require('./config/db')
fastify.register(db)
fastify.register(require('fastify-cors'), {
    origin: true
})
fastify.get('/users', async(request, reply) => {
    res.send({ "hell": "is here" })
});
//database connection
//routes
fastify.register(require('./routes/master'));


// Declare a route
//Funtion To run the server
module.exports = fastify