async function routes(fastify, options) {
    fastify.get('/', function(req, reply) {
        return reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    })
    fastify.get('/addOrganization', function(req, reply) {
        return reply.sendFile('addNewOrganization.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    })
    fastify.get('/addProduct', function(req, reply) {
        return reply.sendFile('addNewProduct.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    })
    fastify.get('/addUser', function(req, reply) {
        return reply.sendFile('addNewUser.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    })
    fastify.get('/createQuotation', function(req, reply) {
        return reply.sendFile('createQuotation.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    })
    fastify.get('/productMaster', function(req, reply) {
        return reply.sendFile('productMaster.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    })
    fastify.get('/userMaster', function(req, reply) {
        return reply.sendFile('userMaster.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    })

}
module.exports = routes