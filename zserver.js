// 导入http模块
const http = require('http');
// 开启服务
const server = http.createServer();
//监听客户端
server.on('request', (req, res) => {
    //获取url地址和方法
    const url = req.url;
    const method = req.method;
    //初始化content 的值
    var content = '';
    // 判断请求路径，以展示不同的页面内容
    if (url === "/" || url === "/index") {
        content = "<h2>首页</h2>";
    } else if (url === "/login") {
        content = "<h2>登陆页</h2>";
    } else {
        content = "<h2>404 NOT FOUND</h2>";
    }
    // 回应内容
    const response = `请求路径是${url}，方法是${method}`;
    // 设置响应头,可解决乱码问题
    res.setHeader("Content-type", "text/html; charset=utf-8");
    // 回应客户端
    res.end(response)
});

// 开启服务器
server.listen("9386", () => {
    console.log("服务已开启");
});