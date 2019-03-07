import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    // handleKeyPress(){
    //     let query = document.getElementById("#nav-search").value
    //     fetch(`http://localhost:5002/employees?name_like=${query}`)
    //     .then(r => r.json())
    //     .then(parsedResults => {

    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel