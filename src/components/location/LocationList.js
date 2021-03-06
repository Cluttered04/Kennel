import React, {Component} from "react"
import {Link} from "react-router-dom"

class LocationList extends Component {
    render() {
        return (
            <section>
                <h1>Locations</h1>
                {this.props.locations.map((location) => {
                    return <div key={location.id}><h1>{location.name} </h1><p>{location.address}</p>
                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                    </div>
                })}
            </section>

        )
    }
}

export default LocationList;

