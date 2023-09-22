const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      if (err) throw err;
      res.write(data);
      return res.end();
    });
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./about.html', 'utf-8', (err, data) => {
      if (err) throw err;
      res.write(data);
      return res.end();
    });
  } else if (req.url === '/contact-me') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./contact-me.html', 'utf-8', (err, data) => {
      if (err) throw err;
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./404.html', 'utf-8', (err, data) => {
      if (err) throw err;
      res.write(data);
      return res.end();
    });
  }
});

server.listen(8080);
