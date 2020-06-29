import React, {Component} from 'react';


class Woods extends Component {
<<<<<<< HEAD
    
    addOneCampG = () => {
        const {campG} = this.props;
        
=======
    getOneCampG = () => {
        const {campG} = this.props;
>>>>>>> d81e644699bef1232a9e70826691a1aaedc1e6eb
        let newCampG = {
            name: campG.name,
            location: campG.location,
            review: campG.review,
            img: campG.img            
        }
        this.props.addCampG(newCampG);
    }




render(){
    return(
      
            <div onClick={this.addCampG}>
          
                <img src={this.props.campG.img} 
                alt={this.props.campG.location} />
                
            
            </div>
     
    )
}
}

export default Woods;