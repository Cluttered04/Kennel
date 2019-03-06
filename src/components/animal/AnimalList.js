import React, {Component} from "react"

class AnimalList extends Component {

     render() {
         return <section>
             <h1>Animals</h1>
             {this.props.animals.map((animal) => {
            //      let ownerName = ""
            //     this.props.owners.forEach((owner) => {
            //         if(animal.owner === owner.id){
            //         ownerName = owner.name

            //     }
            //  })

             return <p key={animal.id}>{animal.name}</p>

             })}
         </section>

     }
}


export default AnimalList;


