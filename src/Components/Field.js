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

    }

    getCampG = () => { 
        axios.get('./api/campG')
        .then(res => {
            this.setState({campG: res.data})
        })
        .catch(err => console.log(err))

    }



render(){
    return(
        <div>
           
            <h2>Field Of Dreams</h2>
            <Woods />
        </div>

    )
}
}
export default Field;