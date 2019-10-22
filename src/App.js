import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  state = {
    fullName: null
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    const fullName = this.state;
    return (
      <div>
        HI <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
