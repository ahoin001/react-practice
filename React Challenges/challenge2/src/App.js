import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/charComponent';

class App extends React.Component {
  state = {

    input: "",
    arrayOfInput : []

  }

  textInputHandler = (event) => {

    // 1. Make change to copy 
    let userInput = event.target.value;
    let arrayOfInput = userInput.split('');

    // 2. Update State
    this.setState({ 
      input: userInput ,
      arrayOfInput: arrayOfInput
    })

  }

  deleteClickHandler = (indexOfWhatToDelete) => {

    // 1. Copy State Variables
        
        // Will have array of both input, and the characters in the input
        let inputAfterDeleteClick = this.state.input;
        inputAfterDeleteClick = inputAfterDeleteClick.split('');

        let newStateList = [...this.state.arrayOfInput];

    // 2. Delete the element at the index provided in both the input, and listed components
        inputAfterDeleteClick.splice(indexOfWhatToDelete,1);
        newStateList.splice(indexOfWhatToDelete,1);

    // 3. Turn the input back into a string so input doesn't turn into an array
        let updatedInputString = inputAfterDeleteClick.join('');
        console.log(inputAfterDeleteClick);

    // 4. Update State, rerender component
        this.setState({
          input: updatedInputString,
          arrayOfInput : newStateList
        })

    // 4. 
    

  }

  render() {

    // TRY TO KEEP LOGIC IN RENDER AND ONLY RETURN FINISHED COMPONENTS

    // Checks input in state and creates array from each character
    const charList =  this.state.input.split('').map((char, index) => {

      return <CharComponent 
              aChar = {char} 
              // Deletes the clicked component then rerenders component with updated list
              deleteClick = {() => this.deleteClickHandler(index)}
              key = {index} 
              />

    })

    return (

      <div>

        <input
          type="text"
          onChange={(event) => this.textInputHandler(event)}
          value={this.state.input}
        />

        <ValidationComponent inputLength={this.state.input.length} />
        
        {charList}

        {/* {this.state.arrayOfInput.map((char, index) => {

          return <CharComponent 
                  aChar = {char} 
                  // Deletes the clicked component then rerenders component with updated list
                  deleteClick = {() => this.deleteClickHandler(index)}
                  key = {index} 
                  />

        })} */}

      </div>

    );

  }
}

export default App;
