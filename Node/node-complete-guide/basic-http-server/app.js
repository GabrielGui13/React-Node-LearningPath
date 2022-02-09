//core modules => http, https, fs, path, os
const routes = require('./routes')
console.log(routes.someText)

const http = require('http')

const server = http.createServer(routes.handler);
server.listen(3000);