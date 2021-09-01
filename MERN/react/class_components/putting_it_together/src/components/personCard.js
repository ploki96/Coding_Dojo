import React, { Component } from 'react';

class PersonCard extends Component{
    constructor (props){
        super(props);
        this.state = {
            new_age: this.props.age
        }
    }
    birthdayClick = () => {
        this.setState({
            new_age: this.state.new_age + 1
        })
    }

    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.new_age}</p>
                <p>Hair Color: {this.props.color}</p>
                <button onClick={this.birthdayClick}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;