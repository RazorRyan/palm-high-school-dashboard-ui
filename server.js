// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

// const express = require('express');
// const app = express();

// app.use(express.static('./dist/'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/'}),
// );

// app.listen(process.env.PORT || 8080);

// console.log('Started');

var express = require('express');
var app = express();
//app.use(requireHTTPS);
var path = require('path');

app.use(express.static(path.join(__dirname, '/dist/')));

app.get('/*', function(req, res) {
  res.

sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, function () {
  console.log('App started');
})