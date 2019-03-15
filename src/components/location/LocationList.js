import React, {Component} from "react"
import {Link} from "react-router-dom"
import ResourceCard from "../generics/ResourceCard"
import EmployeeCard from "../employee/EmployeeCard"

class LocationList extends Component {
    render() {
        return (
            <section>
                <h1>Locations</h1>
                {this.props.locations.map((location) => {
                    return <div key={location.id}><ResourceCard key={location.id} resource={location} route="locations" />
                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                    <section>
                    {this.props.employees.filter(employee => employee.locationId === location.id).map(matchingEmployee => {
                        return <ResourceCard key={matchingEmployee.id} resource={matchingEmployee} route="employees"/>
                    })}

                    </section>
                    </div>
                })}
            </section>

        )
    }
}

export default LocationList;



