// Created by hatty163 on 2019-08-27
// Distributed via AGPL 3.0 License.

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var fs = require('fs');

var http = httpProxy.createProxyServer(options);
var https = httpProxy.createProxyServer(options);

// Destination Server IP
var ip = "Your IP Address here";

// Web Socket Server Configuration
var wss = true;
var websocketenabled = true;

// Web Socket Port(s) Configuration
var wsports = [
  1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070,
  1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419,
  1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429,
  1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439,
  1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449,
  1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459,
  1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469,
  1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479,
  1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489,
  1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499,
  1080, 1496, 1200, 1616
];

// HTTP(HTTPS) Web Server Configuration
var httpenabled = true;
var httpsenabled = true;

// HTTP(HTTPS) Port(s) Configuration
var httpport = 80;
var httpsport = 443;

if(httpenabled == true) {
    httpProxy.createServer({
      target: `http://` + ip + `:` + httpport
    }).listen(`${port}`);
    console.log(`<< KKuTu HTTP Proxy:${port} >>`);
  });
}

if(httpsenabled == true) {
    httpProxy.createServer({
      target: `http://` + ip + `:` + httpsport
      ssl: {
        key: fs.readFileSync('privkey.pem', 'utf8'),
        cert: fs.readFileSync('fullchain.pem', 'utf8')
      }
    }).listen(`${port}`);
    console.log(`<< KKuTu HTTPS Proxy:${port} >>`);
  });
}

if(wss == true) {
  wsports.forEach(function(port) {
    httpProxy.createServer({
      target: `ws://` + ip + `:${port}`,
      ws: true,
      ssl: {
        key: fs.readFileSync('privkey.pem', 'utf8'),
        cert: fs.readFileSync('fullchain.pem', 'utf8')
      }
    }).listen(`${port}`);
    console.log(`<< KKuTu Web Socket Proxy:${port} >>`);
  });
} else {
  wsports.forEach(function(port) {
    httpProxy.createServer({
      target: `ws://` + ip + `:${port}`,
      ws: true
    }).listen(`${port}`);
    console.log(`<< KKuTu Web Socket Proxy:${port} >>`);
  });
}
