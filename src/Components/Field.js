import React, {Component} from 'react';
//import axios from 'axios';
import Woods from './Woods';



class Field extends Component{
    constructor(props){
        super(props);
        this.state = {
            campG: []
        }
    }

    componentDidMount(){

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