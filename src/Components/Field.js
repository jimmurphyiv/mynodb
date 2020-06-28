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
            console.log()
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
        <div className='cg-flex'>
           {mappedCampG}
            <h2>Field Of Dreams</h2>
           
        </div>

    )
}
}
export default Field;