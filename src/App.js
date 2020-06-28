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
       campG: []
    }
  }

  componentDidMount(){
    axois.get('/api/campG')
    .then(res => {
      this.setState({campG: res.data})
    })
    .catch(error => console.log(error));
  
  }

  addCampG = () => { 
    axois.post('./api/campG')
    .then(res => {
        this.setState({campG: this.req.body})
        })
    .catch(err => console.log(err))
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
