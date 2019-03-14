import React, {Component} from "react"
import OwnersAPIManager from "../../modules/OwnersAPIManager"

export default class OwnerEditForm extends Component {
    state={
        name: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault()
        const editedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.name
        }

        this.props.updateOwner(editedOwner)
        .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        OwnersAPIManager.get(this.props.match.params.ownerId)
        .then(owner => {
            this.setState({
                name: owner.name
            })
        })
    }


    render() {
        return(
            <React.Fragment>
                <form className="animalForm">
                <div className="form-group">
                <label htmlFor="ownerName">Owner Name</label>
                <input type="text" required className="form-control" id="name" value={this.state.name} onChange={this.handleFieldChange}/>
                <button onClick={this.updateExistingOwner}>Submit</button>
                </div>
                </form>
            </React.Fragment>
        )
    }
}