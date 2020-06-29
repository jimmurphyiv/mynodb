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
            {this.state.udateReview}
       
      <div>
            <input value={this.state.reviewInput}
                    onChange={e => this.handleUpdate(e.target.value)} />
            <button onClick={() => this.handleUpdate(this.props.campG.id)}>Submit</button>
        </div>
            <p>{this.props.campG.review}</p>
            <buton onClick={this.reviewToggle}>Edit Review</buton>
        </div>
        )
    }
}

export default Truck;