const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const server = http.createServer();

server.on('request', (req, res) => {
    let routes = {
        'GET': {
            '/': indexHtml,
        }
    }
    console.log(req.url)
    let handler = routes[req.method][req.url];

    handler = handler || readFile;
    handler(req, res);
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});

function indexHtml(req, res) {
    readFile({ url: '/index.html' }, res);
}

function readFile(req, res) {
    var filePath = path.join(__dirname, '../client/', req.url);
    console.log(filePath)
    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write('Not found error 404');
            res.end()
        } else {
            if (req.url.includes('js')) {
                res.setHeader('Content-Type', 'application/javascript')
            }
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    })
}