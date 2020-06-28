import React, {Component} from 'react';
//import axios from 'axios';
import Woods from './Woods';



class Field extends Component{
    constructor(props){
        super(props);
        this.state = {
            some: []
        }
    }


render(){
    return(
        <div>
            <Woods />
        </div>

    )
}
}
export default Field;