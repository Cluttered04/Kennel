import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnimalCard from "../animal/AnimalCard";
import EmployeeCard from "./EmployeeCard";

class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <article>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              console.log(this.props.history);
              this.props.history.push("/employees/new");
            }}
          >
            Add New Employee
          </button>
          <h1>Employee List</h1>
          {this.props.employees.map(singleEmployee => {
            return (
              <div key={singleEmployee.id}>
                <div>
                  <EmployeeCard singleEmployee={singleEmployee}/>
                  <section>
                    {this.props.animals
                      .filter(animal => animal.employeeId === singleEmployee.id)
                      .map(matchingAnimal => (
                        <AnimalCard key={matchingAnimal.id} animal={matchingAnimal} />
                      ))}
                  </section>
                </div>
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
