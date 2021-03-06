import React, {Component} from "react";
import {Link} from "react-router-dom";

class OwnerList extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={() => this.props.history.push("/owners/new")}>Add New Owner</button>
                <h1>Owners</h1>
            {this.props.owners.map((owner) => {
                return <div key={owner.id}><p key={owner.id}>{owner.name} {owner.phone}</p>
                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link></div>

            }
            )}
            </div>
        )

    }
}

export default OwnerList;