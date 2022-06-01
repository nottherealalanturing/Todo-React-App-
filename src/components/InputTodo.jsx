import React from 'react';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-control">
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
          name="title"
          className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
