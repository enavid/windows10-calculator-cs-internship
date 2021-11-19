const readFile = require('./utils');

function indexHtml(req, res) {
    readFile({ url: '/index.html' }, res);
}

function staticFiles(req, res) {
    readFile(req, res);
}

module.exports = { indexHtml, staticFiles };