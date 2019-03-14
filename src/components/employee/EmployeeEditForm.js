import React, {Component} from "react"
import EmployeesAPIManager from "../../modules/EmployeesAPIManager"

export default class EmployeeEditForm extends Component {
    state = {
        name: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }



    updateExistingEmployee = evt => {
        evt.preventDefault()

        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.name
        }

        this.props.updateEmployee(editedEmployee)
        .then(() => this.props.history.push("/employees"))
    };


    componentDidMount() {
        EmployeesAPIManager.get(this.props.match.params.employeeId)
        .then(employee => {
            this.setState({
                name: employee.name
            })
        })
    }






    render(){
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                    <label htmlFor="employeeName">Employee Name</label>
                    <input type="text" required className="form-control" onChange={this.handleFieldChange} id="name" value={this.state.name}/>
                    </div>
                </form>
                <button type="submit" onClick={this.updateExistingEmployee}
                className="btn btn-primary">Submit</button>
            </React.Fragment>
        );
    }

}

// <div className="form-group">
{/* <label htmlFor="breed">Breed</label>
<input
  type="text"
  required
  className="form-control"
  onChange={this.handleFieldChange}
  id="breed"
  value = {this.state.breed}
/> */}


