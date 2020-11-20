import Card from './Card';
import React, { useState, useEffect } from "react";

function MemoryGame({score, setScore}) {
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])

    return (
        <div id="cards">

            <Card/>
        </div>

    )
    
    
}

export default MemoryGame;