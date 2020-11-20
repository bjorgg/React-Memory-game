import './App.css';
import Navbar from './Components/Navbar';
import MemoryGame from './Components/MemoryGame';
// import EndGame from './Components/EndGame';
import React, { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0)

  useEffect(() => {
    // Loads when the game starts
  }, [])

  return (
    <div className="App">
      <Navbar text={score}/>

      <button className="start-btn">Start game!</button>
  
      <MemoryGame/>
    </div>
  );
}

export default App;
