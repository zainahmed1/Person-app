// import React from 'react';
import React , {Component} from 'react';
import './Persons.css';
import Person from './Person/Person';

export default class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personsData: [
                {
                    "name": "Bushra",
                    "age": 10,
                    "description": "Chief At Meriot",
                    "isEditMode": false
                },
                {
                    "name": "Dua",
                    "age": 5,
                    "description": "Masters in Painting",
                    "isEditMode": false
                },
                {
                    "name": "Maria",
                    "age": 16,
                    "description": "Comedian on Officer",
                    "isEditMode": false
                }
            ] 
        }
    };

    editPerson = () => {
        alert('Hello from editPerson');
    }

    deletePerson = (onClicked) => {
        this.setState({
            personsData: this.state.personsData.filter 
            (person => person.name !== onClicked.name)
        })
    }

    toggleEditMode = (onClicked, newValue) => {
        this.setState({
            personsData: this.state.personsData.map
            (pInner => {
                if(pInner.name === onClicked.name) {
                   pInner.isEditMode = newValue; 
                }
                return pInner;
            })
        })
    };

    render(){
        return (
            <div className="Persons">
            <h1>Persons</h1>
            {
                this.state.personsData.map(person => {
                    return <Person person={person}
                    delete = {
                        () => this.deletePerson(person)
                    }
                    callMeForOpen = {
                        () => this.toggleEditMode(person, true)
                    }
                    callMeForClose = {
                        () => this.toggleEditMode(person, false)
                    } /> 
                }) 
            }
            </div>
        );
    }
}



// function Persons() {
//     let personsData = [
//         {
//             "name": "Bushra",
//             "age": 10,
//             "description": "Chief At Meriot",
//             "isEditMode": false
//         },
//         {
//             "name": "Dua",
//             "age": 5,
//             "description": "Masters in Painting",
//             "isEditMode": false
//         },
//         {
//             "name": "Maria",
//             "age": 16,
//             "description": "Comedian on Officer",
//             "isEditMode": false
//         }
//     ];

//     let enableEdit = (p) => {
//         // props.person = true;
//         alert("Hi, from " + p.name);
//     };

//     return (
//         <div className="Persons">
//             <h1> Persons</h1>
//             {
//                 personsData.map(person => {
//                 return <Person person={person}
//                 callMe={
//                     ()=> enableEdit(person)
//                  } /> }) 
//             }

//         </div>
//   );
// }

// export default Persons;