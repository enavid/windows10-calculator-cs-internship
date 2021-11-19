const http = require('http');
const controller = require('./controller');
const routes = require('./routes');
const PORT = 3000;
const server = http.createServer();

server.on('request', (req, res) => {
    routes.get('/', controller.indexHtml, { req, res });
    routes.static(controller.staticFiles, { req, res });
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});
