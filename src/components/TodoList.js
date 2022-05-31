import React from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
