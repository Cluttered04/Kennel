import React, { Component } from "react";
import "../animal/Animal.css";
import ResourceCard from "../generics/ResourceCard";

export default class SingleResourceList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                <button type="button" className="btn btn-success" onClick={() => this.props.history.push(`/${this.props.route}`)}>Add New</button>
                </div>
                <section className="animals">
                {this.props.resource.map(singleResource => {
                    return <div key={singleResource.is}>
                    <ResourceCard resource={singleResource} route={this.props.route}/>

                    </div>
                })}
                </section>

            </React.Fragment>

        )
    }
}

