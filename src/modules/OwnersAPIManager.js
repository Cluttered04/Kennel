const OwnersAPIManager = {
    getAll(){
        return fetch("http://localhost:5002/owners")
                .then(owners => owners.json())
    }
}

export default OwnersAPIManager