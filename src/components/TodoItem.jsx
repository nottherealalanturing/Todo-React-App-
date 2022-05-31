import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps, deleteItemProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button onClick={() => deleteItemProps(todo.id)}>Delete</button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
