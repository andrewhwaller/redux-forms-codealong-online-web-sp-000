import React, { Component } from 'react'

constructor() {
  super();
  this.state = {
    text: '',
  };
}

handleChange = event => {
  this.setState({
    text: event.target.value
  })
}

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default CreateTodo;
