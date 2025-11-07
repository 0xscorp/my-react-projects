import React from 'react';

const ResultsContainer =({suggestedNames})=>{
    return(
        <div>
            <p>
            {
                suggestedNames.length>0
                ?suggestedNames[0]
                :null
            }
            </p>
        </div>
    ); 
};

export default ResultsContainer;