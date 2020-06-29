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
        this.getOneCampG();
    }

 

    getOneCampG = () => { 
        axios.get('./api/campG')
        .then(res => {
            this.setState({campG: res.data})
            })
        .catch(err => console.log(err))

    }



    


render(){
    const mappedCampG = this.state.campG.map((campG, i) => (
        <Woods
            key={i} 
            campG={campG}/>
    ))
    return(
        <div className='all-camp'>
           {mappedCampG}
           
           
        </div>

    )
}
}
export default Field;