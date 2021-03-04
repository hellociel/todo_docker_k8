// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 4000;
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const Todo = require('../database/db');
// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));
// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));

// const db = require('../database/db.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()) //difference?

app.use(express.static(__dirname + '/../client/dist'));
//
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connected to DB');
});

const todoSchema = new mongoose.Schema({
  title: String,
  time: String,
  done: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

app.post('/todo', function (req, res) {
  // db.save(req, res, todo);

  let todo = { title: req.body.title, time: req.body.time, done: false };
  let newTodo = new Todo(todo);
  newTodo.save(todo, (err) => {
    if (err) throw err;
    res.send();
  });
});

app.get('/todos', function (req, res) {
  db.collection('todos').find({}, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${PORT}`);
});
