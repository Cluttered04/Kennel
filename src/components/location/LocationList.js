import React, {Component} from "react"
import {Link} from "react-router-dom"
import EmployeeCard from "../employee/EmployeeCard"

class LocationList extends Component {
    render() {
        return (
            <section>
                <h1>Locations</h1>
                {this.props.locations.map((location) => {
                    return <div key={location.id}><h1>{location.name} </h1><p>{location.address}</p>
                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                    <section>
                    {this.props.employees.filter(employee => employee.locationId === location.id).map(matchingEmployee => {
                        return <EmployeeCard key={matchingEmployee.id} employees={matchingEmployee}/>
                    })}

                    </section>
                    </div>
                })}
            </section>

        )
    }
}

export default LocationList;

