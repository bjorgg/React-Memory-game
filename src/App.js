// Importing css file, component and React Hook
import './App.css';
import MemoryGame from './Components/MemoryGame';
import React, { useState } from "react";

// In this function we pass in all components and then a function in index.js will render it to the DOM.
function App() {
  // Declare the options state variable
  const [options, setOptions] = useState(null)

  // This is what the function returns to the DOM
  return (
    <div className="App">
      <div className="navbar">
            <div>Memory game</div>
      </div>
      
      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
        />
      ) : (
        <button className="start-btn" onClick={() => setOptions(16)}>Start a new game!</button>
      )}
    </div>
  );
}

export default App;
