const fastify = require("fastify")();
fastify.register(require('fastify-cors'), {
        origin: true
    })
    //fastify.register(require('fastify-multipart'))
fastify.register(require('fastify-formbody'))



//database connection
//routes
fastify.register(require('./routes/master'), { prefix: '/master' });
fastify.register(require('./routes/organization'), { prefix: '/organization' });
fastify.register(require('./routes/user'), { prefix: '/user' });


// Declare a route
//Funtion To run the server
module.exports = fastify