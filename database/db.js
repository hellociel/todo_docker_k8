// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   // we're connected!
// });

// const todoSchema = new mongoose.Schema({
//   title: String,
//   time: String,
//   done: Boolean,
// });

// const Todo = mongoose.model('Todo', todoSchema);

// // const todoItem = new Todo({ title: String, created_at: Date, done: Boolean });

// let save = (req, res, eachTodo) => {
//   let newTodo = new Todo(eachTodo); //instantiation of newTodo model
//   newTodo.save((err) => {
//     if (err) {
//       console.log('err in db.save');
//       return res.status(404).send(err);
//     }
//     console.log('newTodo.save was successful');
//     res.send();
//   });
// };

// let get = (req, res) => {
//   Todo.find({}, null, function (err, userTodos) {
//     if (err) {
//       conosle.log('error in db.get', err);
//       res.status(404).send(err);
//     } else {
//       console.log('db.get', userTodos);
//       res.status(200).send(userTodos);
//     }
//   });
// };

// module.exports.save = save;
// module.exports.get = get;
// module.exports.Todo = Todo;
