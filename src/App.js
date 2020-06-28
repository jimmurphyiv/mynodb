import React, {Component} from 'react';
import Header from './Components/Header';
import Field from './Components/Field';
import Camper from './Components/Camper'
import axois from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
       addCampG: []
    }
    this.addCampG = this.addCampG.bind(this);
  }

 

  addCampG(campG){ 
    axois.post('./api/campG', {campG})
    .then(res => {
        this.setState({addCampG: this.req.body})
        })
    .catch(err => console.log(err))
    }
    



  render(){
  return (
    <div className="App">
      <Header />
      <Field
          addCampGFn={this.addCampG} />
      <Camper 
          addCampG={this.state.addCampG}/>
    <h2>You can do it!</h2>
       
    </div>
    );
  }

}
export default App;
