import React from 'react';

let charStyles = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border:'1px solid black'
    // text-align: 'center'
}

const charComponent = (props) => {

        return ( 

            <div style={charStyles}>


                <p> {props.aChar}</p>                


            </div>

         );
    
}
 
export default charComponent ;