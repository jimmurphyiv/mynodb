import React, {Component} from 'react';
import Woods from './Woods';
import axios from 'axios';



class Field extends Component{
    constructor(props){
        super(props);
        this.state = {
            campG: []
        }
    }

    componentDidMount(){
        axios.get(`/api/campG`)
        .then(res => {
            this.setState({campG: res.data})
            })
        .catch(err => console.log(err))
        this.getOneCampG();
    }

 

    getOneCampG = (id) => { 
        axios.get(`/api/campG/${id}`)
        .then(res => {
            this.setState({oneCampG: res.data})
            })
        .catch(err => console.log(err))

    }



    


render(){
    const mappedCampG = this.state.campG.map((campG, i) => (
        <Woods
            key={i} 
            campG={campG}
            getOneCampGFn={this.getOneCampG}/>
    ))
    return(
        <div className='all-camp'>
           {mappedCampG}
           
            <div>{this.state.oneCampG && this.state.oneCampG.name}</div>    
           
        </div>

    )
}
}
export default Field;