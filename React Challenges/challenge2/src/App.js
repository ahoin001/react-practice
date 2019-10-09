import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {

    input: "Placeholder"

  }

  textInputHandler = (event) => {

    // 1. Make change to copy 
    let userInput = event.target.value;

    // 3. Update State
    this.setState({ input : userInput })

  }
  render() {



    return (

      <input
        type="text"
        onChange={(event) => this.textInputHandler(event) }
        value={this.state.input}
      />



    );


  }
}

export default App;
