import React, { Component } from "react";
import "../animal/Animal.css";
import ResourceCard from "../generics/ResourceCard";

export default class ResourceList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animalButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push(`/${this.props.route}/new`);
            }}
          >
            Add New
          </button>
        </div>
        <section className="animals">
          {this.props.resource.map(singleResource => (
            <div key={singleResource.id}>
              <ResourceCard
                resource={singleResource}
                route={this.props.route}
              />
              {this.props.secondaryResource
                .filter(singleSecondaryResource => {

                  return (
                    singleSecondaryResource[this.props.secondaryId] ===
                    singleResource.id
                  );
                })
                .map(matchingResource => (
                  <ResourceCard
                    key={matchingResource.id}
                    resource={matchingResource}
                    route={this.props.secondaryRoute}
                  />
                ))}
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

