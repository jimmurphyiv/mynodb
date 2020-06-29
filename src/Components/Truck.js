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
            
            <img src={this.props.oneCampG.img} alt={this.props.oneCampG.name} />
            {this.state.updateReview}
       
      <div>
            <input value={this.state.reviewInput}
                    onChange={e => this.handleUpdate(e.target.value)} />

            <button onClick={() => this.handleUpdate(this.props.oneCampG.id)}>Submit</button>
        </div>

            <p>{this.props.oneCampG.review}</p>
            <button onClick={this.reviewToggle}>Edit Review</button>

        </div>

        )
    }
}

export default Truck;