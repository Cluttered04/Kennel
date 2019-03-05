import React, {Component} from "react"

class LocationList extends Component {
    render() {
        return (
            <section>
                <h1>Locations</h1>
                {this.props.locations.map((location) => {
                    return <section key={location.id}>{location.name} {location.address}</section>
                })}
            </section>

        )
    }
}

export default LocationList;