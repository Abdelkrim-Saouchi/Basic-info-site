const express = require('express');
const path = require('path');
const app = express();

// home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

// about page route
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

//contact me page route
app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contact-me.html'));
});

// handle no matching urls
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
});

// lunch app at port 3000
app.listen(3000, (req, res) => {
  console.log('Express app listening at port 3000');
});
