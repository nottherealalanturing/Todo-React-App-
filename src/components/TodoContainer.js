import React from 'react';
import Header from './Header.js';
import TodoList from './TodoList.js';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <TodoList todoList={this.state.todos} />
      </React.Fragment>
    );
  }
}

export default TodoContainer;
