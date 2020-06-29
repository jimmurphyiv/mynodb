import React, {Component} from 'react';



class Form extends Component {
    constructor(props){
        super(props);
        this.state = {

            name: '',
            location: '',
            review: '',
            img: '' 
        }
        
            
        
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addCampG(this.state)
        this.setState({name: '',
        location: '',review: '',img: '' })
    }

   render(){
       return(
           <form onSubmit={this.handleSubmit}>
               <input type='text' name='name' value={this.state.name} placeholder='enter name'
                onChange={this.handleChange}   /> 

                <input type='text' name='location' value={this.state.location} placeholder='enter location'
                onChange={this.handleChange}   />  

                <input type='text' name='review' value={this.state.review} placeholder='enter review'
                onChange={this.handleChange}   />  

                <input type='text' name='img' value={this.state.img} placeholder='enter img'
                onChange={this.handleChange}   />   

                <button>Add Campground</button>         
           </form>
       )

       
   }

}
export default Form;