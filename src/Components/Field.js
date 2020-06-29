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
        this.getCampG();
    }

    getCampG = () => { 
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
<<<<<<< HEAD
        <div className="all-camp">
=======
        <div className='campGrounds'>
>>>>>>> d81e644699bef1232a9e70826691a1aaedc1e6eb
           {mappedCampG}
            
           
        </div>

    )
}
}
export default Field;