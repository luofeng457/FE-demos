const http = require('http');
const server = http.createServer();
const url = require('url');

let count = 0;

server.on('request', (req, res) => {
    count++;
    const query = url.parse(req.url, true).query;
    res.writeHead(200, {
        'Set-Cookie': 'name=fn;Path=/;Domain=localhost:6688;HttpOnly'
    })
    query.count == 1 ? res.write(`Response from Server -- localhost:6688; visit count: ${count}`) : res.write(`Response from Server -- localhost:6688; no tracking...`);
    res.end();
})

server.listen(6688);
console.log('server is running at port 6688...')