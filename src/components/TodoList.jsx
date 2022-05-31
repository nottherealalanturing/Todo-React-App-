import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
  render() {
    const { handleChangeProps, deleteItemProps } = this.props;
    return (
      <ul>
        {this.props.todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleChangeProps={handleChangeProps}
            deleteItemProps={deleteItemProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
