import React, {Component} from 'react';


class Woods extends Component {
    getOneCampG = () => {
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
        <div>
            <Woods/>
            <h1>Woods</h1>
            
        </div>
    )
}
}

export default Woods;