const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

const options = {
    target: 'http://localhost:6688',
    changeOrigin: true,
    onProxyRes: (proxyRes, req, res) => {
        res.header('Access-Control-Allow-Origin', 'http:localhost');
        res.header('Access-Control-Allow-Credentials', true);
        proxyRes.headers['x-self-defined'] = 'node middleware';
    }
}

app.use('./api', proxy(options));

app.listen(8002);
console.log('proxy server is listen at port 8002');