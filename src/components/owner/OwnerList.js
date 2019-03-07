import React, {Component} from "react";

class OwnerList extends Component {
    render() {
        return (
            <div>
                <h1>Owners</h1>
            {this.props.owners.map((owner) => {
                return <div><p key={owner.id}>{owner.name} {owner.phone}</p><button onClick={() => this.props.deleteOwner(owner.id)}>Delete</button></div>
            }
            )}
            </div>
        )

    }
}

export default OwnerList;