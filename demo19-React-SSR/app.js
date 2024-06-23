const express = require('express');
const path = require('path');
const reactSsr = require('./src/server/middlewares/react-ssr').default;
const requestTime = require('./src/server/middlewares/requestTime').default;

const app = express();

//设置可访问的静态资源，我们把 webpack 打包后的代码放到/dist/static目录下
app.use(requestTime);

app.use(reactSsr);

app.listen(8080);

console.log('server is running at 8080');