// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 4000;
const bodyParser = require('body-parser');

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));
// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));

const db = require('../database/db.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()) //difference?

app.use(express.static(__dirname + '/../client/dist'));

app.post('/todo', function (req, res) {
  let todo = { title: req.body.title, time: req.body.time, done: false };
  db.save(req, res, todo);
});

app.get('/todos', function (req, res) {
  console.log('REQ', req);
  db.get(req, res);
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${PORT}`);
});
