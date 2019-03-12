const remoteurl = "http://localhost:5002"

const OwnersAPIManager = {
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
    }
}

export default OwnersAPIManager