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
<<<<<<< HEAD
        this.setState({addCampG: this.req.body})
        })
    .catch(err => console.log(err))
    }
    


=======
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
>>>>>>> d81e644699bef1232a9e70826691a1aaedc1e6eb

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
