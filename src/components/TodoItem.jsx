import React from 'react';
import styles from './TodoItem.module.css';
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleItemEdit = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { todo, handleChangeProps, deleteItemProps, updateItemProps } = this.props;

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleItemEdit} style={viewMode}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
            className={styles.checkbox}
          />
          <button onClick={() => deleteItemProps(todo.id)}>Delete</button>
          <span style={todo.completed ? completedStyle : null}> {todo.title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={todo.title}
          onChange={(e) => {
            updateItemProps(e.target.value, todo.id);
          }}
          onKeyPress={this.handleUpdateDone}
        />
      </li>
    );
  }
}

export default TodoItem;
