var http = require('http');
var newrelic = require('newrelic');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, Oh Wonderful One!');
    
}).listen(process.env.PORT || 8080);
