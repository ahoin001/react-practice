import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/charComponent';

class App extends React.Component {
  state = {

    input: "Placeholder"

  }

  textInputHandler = (event) => {

    // 1. Make change to copy 
    let userInput = event.target.value;

    // 2. Update State
    this.setState({ input: userInput })

  }
  render() {

    // 1. Get the characters of the current input
    let arrayOfInput = [...this.state.input.split('')]
    console.log(arrayOfInput);

    return (

      <div>

        <input
          type="text"
          onChange={(event) => this.textInputHandler(event)}
          value={this.state.input}
        />

        <ValidationComponent inputLength={this.state.input.length} />

        {arrayOfInput.map((char,index) => {

          return <CharComponent aChar={char}/>

        })}

      </div>




    );


  }
}

export default App;
