import React, {Component} from "react"
import "../animal/Animal.css"

export default class EmployeeForm extends Component {
    state = {
        employee : ""
    };

    handleFieldChange = (evt) => {
        const stateToChange ={};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewEmployee = evt => {
        console.log("working!")
        evt.preventDefault();
        const employee = {
            name: this.state.employee
        }
        this.props.addEmployee(employee)
        .then(() => this.props.history.push("/employees"));

    };

    render() {
        return(
            <React.Fragment>
                <form className="employeeForm">
                <div className = "form-group">
                <label htmlFor="employee">Employee Name</label>
                <input type="text" required className="form-control" onChange={this.handleFieldChange} id="employee" placeholder="Employee Name"/>
                </div>
                </form>
                <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>

            </React.Fragment>

        )
    }
}