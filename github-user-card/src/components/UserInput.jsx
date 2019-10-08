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
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <input
          type="text"
          value={this.state.value}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default UserInput;
