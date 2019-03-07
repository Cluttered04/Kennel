import React, {Component} from "react"

class LocationList extends Component {
    render() {
        return (
            <section>
                <h1>Locations</h1>
                {this.props.locations.map((location) => {
                    return <div><h1 key={location.id}>{location.name} </h1><p>{location.address}</p><button onClick={() => {
                        this.props.deleteLocation(location.id)
                    }}>Delete</button>
                    </div>
                })}
            </section>

        )
    }
}

export default LocationList;