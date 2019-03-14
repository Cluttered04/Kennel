const remoteurl = "http://localhost:5002"

const EmployeesAPIManager = {
    get(employeeId) { return fetch(`${remoteurl}/employees/${employeeId}`)
    .then(r => r.json())
    },

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
    },

    updateEmployee(employeeObject) {return fetch(`${remoteurl}/employees/${employeeObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(employeeObject)
    })}

}

export default EmployeesAPIManager