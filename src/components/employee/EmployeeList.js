import React, {Component} from "react";
import deleteAnimal from "../ApplicationViews"

class EmployeeList extends Component {
    render() {
        return (
            <article>
                <h1>Employee List</h1>
                {this.props.employees.map((singleEmployee) => {
                    return (
                    <div key={singleEmployee.id}><p>{singleEmployee.name}</p>
                    <button onClick={(() =>
                    this.props.deleteEmployee(singleEmployee.id))}>Delete</button>
                    </div>
                    )
                })}
            </article>
        );
    }
}

export default EmployeeList;