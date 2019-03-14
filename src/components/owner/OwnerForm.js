import React, { Component } from "react";
import "../animal/Animal.css";

export default class OwnerForm extends Component {
  state = {
    name: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewOwner = evt => {
    evt.preventDefault();
    const owners = {
      name: this.state.name
    };

    this.props.addOwner(owners).then(() => this.props.history.push("/owners"));
  };

  render() {
    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              id="name"
              onChange={this.handleFieldChange}
              placeholder="Owner Name"
            />
          </div>
        </form>
        <button type="submit" onClick={this.constructNewOwner}>
          Submit
        </button>
      </React.Fragment>
    );
  }
}
