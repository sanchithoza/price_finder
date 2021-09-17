const fastify = require("./main");

var port_number = fastify.listen(process.env.PORT || 3000);
app.listen(port_number);