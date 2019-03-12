import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <article>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
                console.log(this.props.history)
              this.props.history.push("/employees/new");
            }}
          >
            Add New Employee
          </button>
          <h1>Employee List</h1>
          {this.props.employees.map(singleEmployee => {
            return (
              <div key={singleEmployee.id}>
                <p>{singleEmployee.name}</p>
                <Link
                  className="nav-link"
                  to={`/employees/${singleEmployee.id}`}
                >
                  Details
                </Link>
              </div>
            );
          })}
        </article>
      </React.Fragment>
    );
  }
}

export default EmployeeList;
