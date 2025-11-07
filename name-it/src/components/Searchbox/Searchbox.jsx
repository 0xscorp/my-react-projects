import React from 'react';
import "./Searchbox.css";

const Searchbox = ({handleInputChange}) =>{
    return(
        <div className="search-container">
            <input 
            onChange={(event)=> handleInputChange(event.target.value)}
            placeholder="Type keywords here..." 
            className="search-input"/>
        </div>
    )
}

export default Searchbox;