const fastify = require("./main");

var PORT = process.env.PORT || 9000
fastify.listen(PORT);
console.log(`Up on ${PORT}`)