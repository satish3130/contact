import React, { Component } from "react";
import "./add.css";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("plz enter details");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <>
        <div className="ui main">
          <h2>Add contact</h2>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                value={this.state.name}
                placeholder="Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
          </form>
          <button
            className="ui button blue"
            type="Submit"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddContact;
