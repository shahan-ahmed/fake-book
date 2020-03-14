import React from 'react';
import './Profiles.css';

const Profiles = (props) => {
    const {name, image, profession, salary} = props.userData;
    let btn = <button className="btn" onClick={() => props.hendleAddFriend(props.userData)}>Add Friend</button>
    return (    
            <div className="profiles-container">
               <div className="profiles">
                <img src={image} alt=""/>
                <h3>{name}</h3>
                <h4>{profession}</h4>
                <p>Monthly Income: ${salary}</p>
                 {btn}
               </div>
            </div>
            
        
            
    );
};

export default Profiles;