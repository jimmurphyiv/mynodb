import React, { Component } from "react";


class Truck extends Component {
    constructor(props){
        super(props);
        this.state = {
            udateReview: false,
            reviewInput: ''

        }   
    }


reviewInput = (val) => {
    this.setState({reviewInput: val});
    
}


render(){
    return(
        <div>
            <h3>Mudder Trucker</h3>
        </div>
    )
}
}

export default Truck;