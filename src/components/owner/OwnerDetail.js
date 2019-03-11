import React, { Component } from "react";


export default class OwnerDetail extends Component  {
    render() {
        const owner = this.props.owners.find(o => o.id === parseInt(this.props.match.params.ownerId)) || {}

        return(
            <section className = "owner">
            <div key={owner.id}>
            <h4>Owner</h4>
            <h5>{owner.name}</h5>
            <button onClick={() => this.props.deleteOwner(owner.id)
                .then(()=> this.props.history.push("/owners"))}>Delete</button>
            </div>
            </section>
        )
    }
}


