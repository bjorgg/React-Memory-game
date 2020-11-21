import Card from './Card';
import React, { useState, useEffect } from "react";
import Images from "./Images";

function MemoryGame({options, setOptions, score, setScore}) {
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])

    useEffect(() => {
        const newGame = []
        for (let i = 0; i < options / 2; i++) {
          const firstOption = {
            id: 2 * i,
            imageId: i,
            image: Images[i],
            flipped: false,
          }
          const secondOption = {
            id: 2 * i + 1,
            imageId: i,
            image: Images[i],
            flipped: false,
          }
    
          newGame.push(firstOption)
          newGame.push(secondOption)
        }
    
        const shuffledGame = newGame.sort(() => Math.random() - 0.5)
        setGame(shuffledGame)
      }, [])
    
      useEffect(() => {
        const finished = !game.some(card => !card.flipped)
        if (finished && game.length > 0) {
            setTimeout(() => {
                setOptions(null)
            }, 1000)
        }
      }, [game])
    
      if (flippedIndexes.length === 2) {
        const match = game[flippedIndexes[0]].imageId === game[flippedIndexes[1]].imageId
      
        if (match) {
          const newGame = [...game]
          newGame[flippedIndexes[0]].flipped = true
          newGame[flippedIndexes[1]].flipped = true
          setGame(newGame)
      
          const newIndexes = [...flippedIndexes]
          newIndexes.push(false)
          setFlippedIndexes(newIndexes)
        } else {
          const newIndexes = [...flippedIndexes]
          newIndexes.push(true)
          setFlippedIndexes(newIndexes)
        }
      }
    
        return (
          <div id="cards">
            {game.map((card, index) => (
              <div className="card" key={index}>
                <Card
                  id={index}
                  image={card.image}
                  game={game}
                  flippedCount={flippedCount}
                  setFlippedCount={setFlippedCount}
                  flippedIndexes={flippedIndexes}
                  setFlippedIndexes={setFlippedIndexes}
                />
              </div>
            ))}
          </div>
        )
      
}

export default MemoryGame;