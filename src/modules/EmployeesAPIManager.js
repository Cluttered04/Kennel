const remoteurl = "http://localhost:5002"

const EmployeesAPIManager = {
    getAll() {return fetch("http://localhost:5002/employees")
    .then(employees => employees.json())
},
    postEmployee(employeeObject) {
        return fetch(`${remoteurl}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
           body: JSON.stringify(employeeObject)
        }).then(data => data.json())
    }
}

export default EmployeesAPIManager