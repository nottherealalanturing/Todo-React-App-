import React from 'react';
import Header from './Header.jsx';
import TodoList from './TodoList.jsx';
import InputTodo from './InputTodo.jsx';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  addTodoItem = (title) => {
    const newTodo = { id: 4, title: title, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  updateItem = (updatedTitle, id) => {
    console.log(updatedTitle, id);
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteItem = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            todoList={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteItemProps={this.deleteItem}
            updateItem={this.updateItem}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
