const remoteurl = "http://localhost:5002"

const OwnersAPIManager = {
    get(ownerId){ return fetch(`${remoteurl}/owners/${ownerId}`)
    .then(r => r.json())},

    getAll(){
        return fetch("http://localhost:5002/owners")
                .then(owners => owners.json())
    },

    postOwner(ownerObject) {
        return fetch(`${remoteurl}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ownerObject)
        }).then(data => data.json())
    },

    updateOwner(ownerObject) {
        return fetch(`${remoteurl}/owners/${ownerObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(ownerObject)
        }).then(r => r.json())
    }
}

export default OwnersAPIManager