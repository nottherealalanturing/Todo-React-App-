import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />{' '}
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
