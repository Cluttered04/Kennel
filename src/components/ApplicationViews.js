import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owner/OwnerList.js"
import SearchResults from "./search/SearchResults.js"
import AnimalAPIManager from "../modules/AnimalAPIManager"
import EmployeesAPIManager from "../modules/EmployeesAPIManager"
import LocationsAPIManafer from "../modules/LocationsAPIManager"
import OwnersAPIManager from "../modules/OwnersAPIManager"
import LocationsAPIManager from '../modules/LocationsAPIManager';


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
        EmployeesAPIManager.getAll()
        .then(parsedEmployees => {
            newState.employees = parsedEmployees;
            LocationsAPIManager.getAll()
            .then(parsedLocations => {
                newState.locations = parsedLocations
                OwnersAPIManager.getAll()
                .then(parsedOwners => {
                    newState.owners = parsedOwners
                    AnimalAPIManager.getAll()
                    .then(parsedAnimals => {
                        newState.animals = parsedAnimals
                        this.setState(newState)
                    })

                })
            })
        })
    }


    deleteAnimal = (id) => {
        return AnimalAPIManager.removeAndList(id)
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