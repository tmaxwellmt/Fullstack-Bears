var http = require('http');
http.createServer(function(req, res) {
res.send("Hello World");
}).listen(3000);

console.log("Server is up and running")
