// server.js
const express = require('express');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
// For all GET requests, send back index.html

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS

// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(process.env.PORT || 8080);