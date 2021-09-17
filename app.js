const fastify = require("./main");

const { PORT = 3000, LOCAL_ADDRESS = '0.0.0.0' } = process.env
fastify.listen(PORT, LOCAL_ADDRESS, () => {
    const address = fastify.address();
    console.log('server listening at', address);
});