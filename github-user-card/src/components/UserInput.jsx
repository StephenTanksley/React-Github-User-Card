import React from "react";

class UserInput extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default UserInput;
