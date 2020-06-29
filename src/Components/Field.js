import React, {Component} from 'react';
import Woods from './Woods';




class Field extends Component{
    constructor(props){
        super(props);
        this.state = {
            campG: []
        }
    }

render(){
    const mappedCampG = this.props.campG.map((campG, i) => (
        <Woods
            key={i} 
            campG={campG}
            getOneCampGFn={this.props.getOneCampG}/>
    ))
    return(
        <div className='all-camp'>
           {mappedCampG}

            {/* <div>{this.state.oneCampG && this.state.oneCampG.name}</div>     */}
           
        </div>

    )
}
}
export default Field;