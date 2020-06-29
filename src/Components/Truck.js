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

reviewToggle = () => {
    this.setState({updateReview: !this.state.updateReview})
}

handleUpdate = (id) => {
    this.props.updateReviewFn(id, this.state.reviewInput);
    this.reviewToggle();
}





render(){
    return(
        <div>
            <img src={this.props.campG.img} alt={this.props.campG.name} />

        </div>
    )
}
}

export default Truck;