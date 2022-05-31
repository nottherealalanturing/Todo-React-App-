import React from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {
  render() {
    const { handleChangeProps } = this.props;
    return (
      <ul>
        {this.props.todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} handleChangeProps={handleChangeProps} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
