 var http = require('http');
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Zai4ka ya tebya o4en silno lublu!!! Vyzdoravlivay poskoree!!!');
  }).listen(3000, 'http://livechat-desogn.rhcloud.com');
  console.log('Server running at http://livechat-desogn.rhcloud.com/');
