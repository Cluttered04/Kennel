import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class EmployeeCard extends Component {
    render() {
        return(
            <h4>{this.props.employees.name}</h4>
        )
    }
}