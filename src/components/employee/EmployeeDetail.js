import React, {Component} from "react"

export default class EmployeeDetail extends Component {
    render() {
        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}
        return <section>
            <div key={employee.id}>
            <h4>{employee.name}</h4>
            <button onClick={() => this.props.deleteEmployee(employee.id).then(() => this.props.history.push("/employees"))}>Delete</button>
            </div>
        </section>
    }
}
