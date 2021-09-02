import React, { Component } from 'react';

const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.color}</p>
        </div>
    )
}

// class PersonCard extends Component{
//     constructor (props){
//         super(props);
//     }

//     render() {
//         return(
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>Age: {this.props.age}</p>
//                 <p>Hair Color: {this.props.color}</p>
//             </div>
//         )
//     }
// }

export default PersonCard;