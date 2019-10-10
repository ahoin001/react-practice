import React from 'react';

const divStyle = {
    margin: '40px',
    border: '5px solid blue'
  };

const ValidationComponent = (props) => {
    
    let conditionalText = "";

    if(props.inputLength < 5 ) {
        conditionalText = "Text to short";
    }
    else{
        conditionalText = "Text is long enough"
    }

    return (
        <div style={divStyle}>

            <h1>Component reporting for duty</h1>
            <p> {conditionalText} </p>
            <p> {props.inputLength} </p>

        </div>


    );

}

export default ValidationComponent;