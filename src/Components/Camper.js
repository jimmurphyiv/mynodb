import React from 'react';
import Truck from './Truck'



const Camper = props => {
  
    return (
        <div className="camper">
            <h1>Camper Review </h1>
                <div className='all-camp'>
            <Truck
          
            oneCampG={props.oneCampG} 
            updateReviewFn={props.updateReviewFn}
            deleteCampG={props.deleteCampG} />
            </div>
           
         </div>
        
    )
}    
export default Camper;