import React, {Component} from 'react';
import Header from './Components/Header';
import Field from './Components/Field';
import Camper from './Components/Camper'
// import axois from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
       campG: []
    }


 
  }



  render(){
  return (
    <div className="App">
      <Header />
      <Field />
      <Camper />
    <h2>You can do it!</h2>
       
    </div>
    );
  }

}
export default App;
