const animalAPIManager = {
    getAll(){
        return fetch("http://localhost:5002/animals")
        .then(animals => animals.json())
    },

    removeAndList(id){
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        }).then (() => {
            return fetch("http://localhost:5002/animals")
        }).then(r => r.json())
    }
}




export default animalAPIManager