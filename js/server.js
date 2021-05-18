// ajax请求
// 引入express
const { Console } = require('console');
const express = require('express');
// 创建应用对象
const app = express();
// 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
// jQery 服务
app.all('/jQery-server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    
    response.send('htm');
});
// // 延时响应
// app.all('/server', (request, response) => {
//     // 设置响应头，设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     setTimeout(() => {
//         // 设置响应体
//         response.send('延时响应');
//     })
// }, 3000);

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中...");
})
