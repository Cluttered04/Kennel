import React, {Component} from "react"

export default class LocationDetail extends Component {
    render() {
        const location = this.props.locations.find(l => l.id === parseInt(this.props.match.params.locationId)) || {}

        return(
            <div key={location.id}><h4>{location.name}</h4><button onClick={() => this.props.deleteLocation(location.id)
            .then(() => this.props.history.push("/"))}>Delete</button></div>
        )
    }
}

// const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

// return (
//     <section className="animal">
//         <div key={animal.id} className="card">
//             <div className="card-body">
//                 <h4 className="card-title">
//                     <img src={dog} className="icon--dog" />
//                     {animal.name}
//                 </h4>
//                 <h6 className="card-title">{animal.breed}</h6>
//                 <button
//                     onClick={() => this.props.deleteAnimal(animal.id)
//                                     .then(() => this.props.history.push("/animals"))}
//                     className="card-link">Delete</button>
//             </div>
//         </div>
//     </section>