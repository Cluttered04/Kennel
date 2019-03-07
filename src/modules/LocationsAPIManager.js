const LocationsAPIManager = {
    getAll() {
        return fetch("http://localhost:5002/locations")
            .then(locations => locations.json())
    }
}

export default LocationsAPIManager;