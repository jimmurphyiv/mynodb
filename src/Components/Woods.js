import React, {Component} from 'react';


class Woods extends Component {
    
    addCampG = () => {
        const {campG} = this.props;
        
      
        this.props.getOneCampGFn(campG.id);
        
    }




render(){
    return(
      
            <div onClick={this.addCampG} >
                <p>{this.props.campG.name}</p>
                <img src={this.props.campG.img} 
                alt={this.props.campG.name} style={{width: 125}}/>
                
            
            </div>
     
    )
}
}

export default Woods;