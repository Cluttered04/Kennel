import React, { Component } from "react";
import ResourceCard from "../generics/ResourceCard"

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
                  <ResourceCard singleEmployee={singleEmployee} resource={singleEmployee} route="employees" />
                  <section>
                    {this.props.animals
                      .filter(animal => animal.employeeId === singleEmployee.id)
                      .map(matchingAnimal => (
                        <ResourceCard key={matchingAnimal.id} resource={matchingAnimal} route="animals" />
                      ))}
                  </section>
                </div>


              </div>
            );
          })}
        </article>
      </React.Fragment>
    );
  }
}

export default EmployeeList;
