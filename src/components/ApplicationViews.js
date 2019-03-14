import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList.js";
import SearchResults from "./search/SearchResults.js";
import AnimalAPIManager from "../modules/AnimalAPIManager";
import EmployeesAPIManager from "../modules/EmployeesAPIManager";
import LocationsAPIManager from "../modules/LocationsAPIManager";
import OwnersAPIManager from "../modules/OwnersAPIManager";
import AnimalDetail from "./animal/AnimalDetail";
import OwnerDetail from "./owner/OwnerDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerForm from "./owner/OwnerForm";
import Login from "./authentication/Login";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import OwnerEditForm from "./owner/OwnerEditForm"

class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") != null;

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    results: []
  };

  componentDidMount() {
    const newState = {};
    EmployeesAPIManager.getAll().then(parsedEmployees => {
      newState.employees = parsedEmployees;
      LocationsAPIManager.getAll().then(parsedLocations => {
        newState.locations = parsedLocations;
        OwnersAPIManager.getAll().then(parsedOwners => {
          newState.owners = parsedOwners;
          AnimalAPIManager.getAll().then(parsedAnimals => {
            newState.animals = parsedAnimals;
            this.setState(newState);
          });
        });
      });
    });
  }

  deleteAnimal = id => {
    return AnimalAPIManager.removeAndList(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  };

  addAnimal = animal =>
    AnimalAPIManager.postAnimal(animal)
      .then(() => AnimalAPIManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

  addOwner = owner => {
    return OwnersAPIManager.postOwner(owner)
      .then(() => OwnersAPIManager.getAll())
      .then(owners => this.setState({ owners: owners }));
  };

  addEmployee = employee =>
    EmployeesAPIManager.postEmployee(employee)
      .then(() => EmployeesAPIManager.getAll())
      .then(employees => this.setState({ employees: employees }));

  updateAnimal = editedAnimalObject => {
    return AnimalAPIManager.put(editedAnimalObject)
      .then(() => AnimalAPIManager.getAll())
      .then(animals => {
        this.setState({
          animals: animals
        });
      });
  };

  updateEmployee = editedEmployeeObject => {

    return EmployeesAPIManager.updateEmployee(editedEmployeeObject)
      .then(() => EmployeesAPIManager.getAll())
      .then(employees => {
        this.setState({
          employees: employees
        });
      });
  };

  updateOwner = editedOwnerObject => {
    return OwnersAPIManager.updateOwner(editedOwnerObject)
    .then(() => OwnersAPIManager.getAll())
    .then(owners => {
      this.setState({
        owners: owners
      })
    })
  }

  deleteEmployee = id => {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => fetch(`http://localhost:5002/employees`))
      .then(r => r.json())
      .then(parsedEmployees =>
        this.setState({
          employees: parsedEmployees
        })
      );
  };

  deleteLocation = id => {
    return fetch(`http://localhost:5002/locations/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => {
        fetch(`http://localhost:5002/locations`)
          .then(r => r.json())
          .then(parsedLocations =>
            this.setState({
              locations: parsedLocations
            })
          );
      });
  };

  deleteOwner = id => {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "Delete"
    })
      .then(r => r.json)
      .then(() => fetch("http://localhost:5002/owners"))
      .then(r => r.json())
      .then(parsedOwners =>
        this.setState({
          owners: parsedOwners
        })
      );
  };

  render() {
    return (
      <div className="container-div">
        <Route
          exact
          path="/"
          render={props => {
            return (
              <LocationList
                deleteLocation={this.deleteLocation}
                locations={this.state.locations}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            return (
              <LocationDetail
                {...props}
                deleteLocation={this.deleteLocation}
                locations={this.state.locations}
              />
            );
          }}
        />
        <Route
          exact
          path="/owners"
          render={props => {
            return (
              <OwnerList
                {...props}
                deleteOwner={this.deleteOwner}
                owners={this.state.owners}
              />
            );
          }}
        />
        <Route
          path="/owners/new"
          render={props => {
            return (
              <OwnerForm
                {...props}
                addOwner={this.addOwner}
                owners={this.state.owners}
              />
            );
          }}
        />
        <Route
          exact path="/owners/:ownerId(\d+)"
          render={props => {
            return (
              <OwnerDetail
                {...props}
                deleteOwner={this.deleteOwner}
                owners={this.state.owners}
              />
            );
          }}
        />
        <Route path="/owners/:ownerId(\d+)/edit"
        render={props => {
          return (
            <OwnerEditForm {...props} updateOwner={this.updateOwner}/>
          )
        }}/>
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList {...props} animals={this.state.animals} />;
          }}
        />
        {/* if(this.isAuthenticated()) {
              return (
                <EmployeeList
                  {...props}
                  deleteEmployee={this.deleteEmployee}
                  employees={this.state.employees}
                />)
            } else {
              return <Redirect to="/login"/>
            } */}
        {/* // Our shiny new route. We pass employees to the AnimalForm so a
        dropdown can be populated */}
        <Route
          path="/animals/new"
          render={props => {
            return (
              <AnimalForm
                {...props}
                addAnimal={this.addAnimal}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props => {
            return (
              <AnimalDetail
                {...props}
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return (
              <AnimalEditForm
                {...props}
                employees={this.state.employees}
                updateAnimal={this.updateAnimal}
              />
            );
          }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <EmployeeList
                  {...props}
                  deleteEmployee={this.deleteEmployee}
                  employees={this.state.employees} animals={this.state.animals}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          path="/employees/new"
          render={props => {
            return (
              <EmployeeForm
                {...props}
                addEmployee={this.addEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          exact
          path="/employees/:employeeId(\d+)"
          render={props => {
            return (
              <EmployeeDetail
                {...props}
                deleteEmployee={this.deleteEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />


        <Route
          path="/employees/:employeeId(\d+)/edit"
          render={props => {
            return (
              <EmployeeEditForm
              {...props}
              updateEmployee={this.updateEmployee}
            />
            );
          }}
        />
        <Route
          path="/search"
          render={props => {
            return <SearchResults results={this.state.results} />;
          }}
        />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default ApplicationViews;
