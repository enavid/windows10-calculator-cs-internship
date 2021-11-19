const indexHtml = require('./controller');

let routes = {
    'GET': {
        '/': indexHtml,
    }
}

module.exports = routes;