const remoteURL = "http://localhost:5002"

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
    },

    postAnimal(newAnimal){
            return fetch(`${remoteURL}/animals`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(newAnimal)
            }).then(data => data.json())
          }
    }





export default animalAPIManager