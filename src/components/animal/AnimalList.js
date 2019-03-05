import React, {Component} from "react"

class AnimalList extends Component {
    render() {
        return <section>
            <h1>Animals</h1>
            <p>{this.props.animals.map((animal) => {
                return <p key={animal.id}>{animal.name}</p>
            })}</p>
        </section>

    }

}

export default AnimalList;