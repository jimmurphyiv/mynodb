import React from 'react';
import Truck from './Truck'



const Camper = props => {
    const mappedCampG = props.addCampG.map((campG, i) => (
        <Truck
            key={i}
            campG={campG} 
            updateReviewFn={props.updateReviewFn}
            deleteCampG={this.deleteCampG} />



    ))

    
return (
        <div>
            <h1>Camper Review </h1>
                <div className='all-camp'>
                {mappedCampG}
                </div>
        </div>
    )
}    
export default Camper;