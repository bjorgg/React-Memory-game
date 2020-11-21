import './App.css';
import MemoryGame from './Components/MemoryGame';
import React, { useState, useEffect } from "react";

function App() {
  const [options, setOptions] = useState(null)
  const [score, setScore] = useState(0)

  // Counter for score
  // Maybe skip the score for now

  return (
    <div className="App">
      <div className="navbar">
            <div className="game-title">Memory</div>
            <div className="score">Score: {score}</div> 
      </div>
  
      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
          score={score}
          setScore={setScore}
        />
      ) : (
        <button className="start-btn" onClick={() => setOptions(12)}>Start a new game!</button>
      )}
    </div>
  );
}

export default App;
