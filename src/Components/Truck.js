import React, { Component } from "react";
import { render } from "@testing-library/react";

class Truck extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            reviewInput: ''

        }   
    }
}

handleInput = (val) => {
    this.ListeningStateChangedEvent({reviewInput: val})
}


render(){
    return(
        <div>

        </div>
    )
}

export default Truck;