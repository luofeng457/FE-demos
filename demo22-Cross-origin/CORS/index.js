var qs = require('querystring');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    var _data = '';
    req.on('data', function (chunk) {
        _data += chunk;
    })

    req.on('end', function () {
        res.writeHead(200, 'success', {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, X-Stage-Test',
            'Access-Control-Allow-Methods': 'GET, GET, POST',
        })

        res.end('message from client: ' + _data)
    })
})

server.listen(8080);
console.log('server is running at port 8080...');