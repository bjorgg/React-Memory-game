import Cards from './Cards';
import React, { useState, useEffect } from "react";

function MemoryGame({score, setScore}) {
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])

    return (
        <>
            <div>Game goes here</div>

            <Cards/>
        </>

    )
    
    
}

export default MemoryGame;