import React, {Component} from 'react';


class Woods extends Component {
    
    addOneCampG = () => {
        const {campG} = this.props;
        
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