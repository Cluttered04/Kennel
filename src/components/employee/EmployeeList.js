import React, {Component} from "react";
import deleteAnimal from "../ApplicationViews"
import {Link} from "react-router-dom"

class EmployeeList extends Component {
    render() {
        return (
            <article>
                <h1>Employee List</h1>
                {this.props.employees.map((singleEmployee) => {
                    return (
                    <div key={singleEmployee.id}><p>{singleEmployee.name}</p>
                        <Link className="nav-link" to={`/employees/${singleEmployee.id}`}>Details</Link>
                    </div>
                    )
                })}
            </article>
        );
    }
}

export default EmployeeList;

// <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link></div>