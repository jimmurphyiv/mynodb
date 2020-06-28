import React from 'react';
import Truck from './Truck'



const Camper = props => {
    const mappedCampG = props.addCampG.map((campG, i) => (
        <Truck
            key={i}
            addCampG={campG} />



    ))

    
return (
        <div>
            <h1>Camper Review </h1>
                <div className='Camper'>
                {mappedCampG}
                </div>
        </div>
    )
}    
export default Camper;