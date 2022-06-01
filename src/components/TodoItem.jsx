import React from 'react';
import styles from './TodoItem.module.css';
class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { todo, handleChangeProps, deleteItemProps } = this.props;
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
          className={styles.checkbox}
        />
        <button onClick={() => deleteItemProps(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}> {todo.title}</span>
      </li>
    );
  }
}

export default TodoItem;
