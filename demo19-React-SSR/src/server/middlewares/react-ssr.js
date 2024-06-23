import React from '../../client/pages/index';

//完成 react ssr 工作的中间件,组件在服务端渲染的逻辑都在这个文件内

//引入Index 组件
import React from 'react';
//引入index 组件
import Index from '../../client/pages/index';
import { renderToString } from 'react-dom/server';

export default (req, res, next) => {

    const html = renderToString(<Index />);
    res.body = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>my react ssr</title>
        </head>
        <body>
            <div id="root">
                ${html}
            </div>
            // <script type="text/javascript" src="index.js"></script>
        </body>
    </html>
`;

    next();
}