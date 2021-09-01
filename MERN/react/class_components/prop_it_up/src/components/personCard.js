import React, { Component } from 'react';

class PersonCard extends Component{
    constructor (props){
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.color}</p>
            </div>
        )
    }
}

export default PersonCard;