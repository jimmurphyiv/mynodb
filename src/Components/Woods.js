import React, {Component} from 'react';


class Woods extends Component {
    
    addCampG = () => {
        const {campG} = this.props;
        
        let newCampG = {
            name: campG.name,
            location: campG.location,
            review: campG.review,
            img: campG.img            
        }
        this.props.getOneCampGFn(newCampG);
    }




render(){
    return(
      
            <div onClick={this.addCampG}>
          
                <img src={this.props.campG.img} 
                alt={this.props.campG.name} />
                
            
            </div>
     
    )
}
}

export default Woods;