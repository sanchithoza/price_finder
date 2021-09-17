const fastify = require("./main");

fastify.listen(process.env.PORT || 5000, (err) => {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
});