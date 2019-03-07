//reroute to search results then pass data with a route - give push extra data

import React, {Component} from "react"

export default class SearchResults extends Component {
    render() {
        return(
            <div>
                <h1>Results</h1>

            </div>
        )
    }
}

// this.props.history.push - string of route or pass in an object, pass from navbar to searchresults