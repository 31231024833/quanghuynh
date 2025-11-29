// make use of the http module
const http = require('http');

// configure HTTP server
const server = http.createServer(function (request, response) {
    // 1. Đổi 'text/plain' thành 'text/html' để chỉnh được màu và font chữ
    // Thêm 'charset=utf-8' để gõ tiếng Việt không bị lỗi font
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    // 2. Viết nội dung mới và thêm màu (ví dụ màu đỏ - red)
    // Bạn có thể đổi 'red' thành 'blue', 'green', 'pink' tùy thích
    response.write('<h1 style="color: red;">Bi Ai Ti Cin Chào </h1>');

    response.end();
});

// Listen on port 8080
const port = 8080;
server.listen(port);
console.log("Server running at port=" + port);