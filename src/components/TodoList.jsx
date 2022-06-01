import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoList extends React.Component {
  render() {
    const { handleChangeProps, deleteItemProps, updateItem } = this.props;
    return (
      <ul>
        {this.props.todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleChangeProps={handleChangeProps}
            deleteItemProps={deleteItemProps}
            updateItemProps={updateItem}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
