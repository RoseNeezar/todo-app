import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk the fish" }, { task: "grrom chicken" }]
    };
  }

  render() {
    const todo = this.state.todos.map(td => <Todo task={td.task} />);
    return (
      <div>
        <ul>{todo}</ul>
      </div>
    );
  }
}
