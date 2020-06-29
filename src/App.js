import React, {Component} from 'react';
import Header from './Components/Header';
import Field from './Components/Field';
import Camper from './Components/Camper'
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
     this.state = {
       addCampG: []
    }
    this.addCampG = this.addCampG.bind(this);
  }

  componentDidMount(){
    axios.get('/api/campG')
    .then( res => {
      this.setState({getOneCampG: res.data})
    })
  }

  
 

  addCampG(campG){ 
    axios.post('./api/campG', {campG})
    .then(res => {
        this.setState({addCampG: res.data })
        })
    .catch(err => console.log(err))
    }

    updateReview = (id, newReview) => {
      let body = {review: newReview}

      axios.put(`/api/campG/${id}`, {body})
      .then(res =>{
        this.setState({newReview: res.data})
      })
     .catch(error => console.log(error));
    }

    deleteCampG = (id) => {
      axios.delete(`/api/campG/${id}`)
      .then(res => {
        this.setState({campG: res.data})
      })
    }


    



  render(){
  return (
    <div className="App">
      <Header />
      <Field
          addCampGFn={this.addCampG} />
      <Camper 
          addCampG={this.state.addCampG}
          updateReviewFn={this.updateReview}
          deleteCampG={this.deleteCampG}/>
    <h2>You can do it!</h2>
       
    </div>
    );
  }

}
export default App;
