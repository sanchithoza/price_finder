const fastify = require("./main");

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
console.log(`Up on ${PORT}`)