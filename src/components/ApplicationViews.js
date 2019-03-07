import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owner/OwnerList.js"
import SearchResults from "./search/SearchResults.js"


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        results:[]
    }

    componentDidMount(){
        const newState = {};
        fetch("http://localhost:5002/employees")
        .then(employees => employees.json())
        .then(parsedEmployees => {
            newState.employees = parsedEmployees;
            return fetch("http://localhost:5002/locations")
            .then(locations => locations.json())
            .then(parsedLocations => {
                newState.locations = parsedLocations
                return fetch("http://localhost:5002/owners")
                .then(owners => owners.json())
                .then(parsedOwners => {
                    newState.owners = parsedOwners
                    return fetch("http://localhost:5002/animals")
                    .then(animals => animals.json())
                    .then(parsedAnimals => {
                        newState.animals = parsedAnimals
                        this.setState(newState)
                    })

                })
            })
        })
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(r => r.json())
        .then(parsedEmployees => this.setState({
            employees: parsedEmployees
        })
        )
    }

    deleteLocation = id => {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
        .then(()=> {
            fetch(`http://localhost:5002/locations`)
            .then(r => r.json())
            .then(parsedLocations => this.setState({
                locations: parsedLocations
            })

            )
        })

    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "Delete"
        }).then(r => r.json)
        .then(() => fetch("http://localhost:5002/owners"))
        .then(r => r.json())
        .then(parsedOwners => this.setState({
            owners: parsedOwners
        }))
    }


    render() {
        return (
            <div className = "container-div">
                <Route exact path="/" render={(props) => {
                    return <LocationList deleteLocation={this.deleteLocation} locations={this.state.locations} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList deleteOwner = {this.deleteOwner} owners={this.state.owners} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults results={this.state.results} />
                }} />
            </div>
        )
    }
}

export default ApplicationViews