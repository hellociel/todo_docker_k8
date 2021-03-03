import React, { Component } from 'react';

function List(props) {
  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map((item) => (
        <ul>
          {item.title} <button>Edit</button>
          <button className="deleteButton">Delete</button>
        </ul>
      ))}
    </div>
  );
}

export default List;
