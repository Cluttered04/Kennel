import React, {Component} from "react";

class OwnerList extends Component {
    render() {
        return (
            <div>
                <h1>Owners</h1>
            {this.props.owners.map((owner) => {
                return <p>{owner.name} {owner.phone}</p>
            }
            )}
            </div>
        )

    }
}

export default OwnerList;