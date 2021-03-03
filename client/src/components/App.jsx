import React, { Component } from 'react';
import List from './List.jsx';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      title: '',
      time: 0,
      allTodos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  onChange(e) {
    let changedTitle = e.target.value;
    let today = new Date();
    let currTime =
      today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

    this.setState({ title: changedTitle, time: currTime });
  }

  onSubmit(e) {
    e.preventDefault();
    this.addTodo();
  }

  addTodo() {
    let todo = { title: this.state.title, time: this.state.time, done: false };
    axios
      .post('/todo', todo)
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }
  deleteTodo() {}
  getTodo() {
    console.log('submitted');
    axios
      .get('/todos')
      .then((response) => {
        // handle success

        console.log(response);
        this.setState({ allTodos: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  componentDidMount() {
    this.getTodo();
  }
  render() {
    return (
      <div>
        <h1>Ciel's Todo List</h1>
        <form>
          <label>Add a Todo</label>
          <input onChange={this.onChange} type="text"></input>
          <button onClick={this.onSubmit}>Add</button>
          <button onClick={this.deleteTodo}>Delete</button>
          <List todos={this.state.allTodos} />
        </form>
      </div>
    );
  }
}

export default App;
