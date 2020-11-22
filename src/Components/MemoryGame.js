// Importing Images and Card components and React Hooks
import Card from './Card';
import React, { useState, useEffect } from "react";
import Images from "./Images";


// This is the game logic
function MemoryGame({options, setOptions}) {
    // Declaring state variables
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])

    // The Effect Hook lets you perform side effects in function components
    // The useEffect hook runs here when the component renders and randomly 
    // assigns options / 2 images out to all the cards.
    useEffect(() => {
        const newGame = []
        // Looping through the array of options which are the images
        // There are 8 images and we have set the options to 16 so every image is duplicated
        // The imageId will be the same for matching images
        // The id will be different for each image
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
          // Pushing the options to the newGame array
          newGame.push(firstOption)
          newGame.push(secondOption)
        }
        
        // Shuffle the array with sort() and Math.random() to mix up the images/cards
        const shuffledGame = newGame.sort(() => Math.random() - 0.5)
        // Setting the game state to the shuffled game
        setGame(shuffledGame)
      }, []) // Passing an empty array so the props and state inside the effect will always have their initial values
      
      // Here we use the Effect hook to set options to null when the game is finished
      // We will then return to initial state after 1 sec. as set in setTimeout
      useEffect(() => {
        const finished = !game.some(card => !card.flipped)
        if (finished && game.length > 0) {
            setTimeout(() => {
                setOptions(null)
            }, 1000)
        }
      }, [game]) // Pass an array as an optional second argument to tell React 
                // to skip applying an effect if certain values haven’t changed between re-renders.
      
      // If two cards have been flipped
      if (flippedIndexes.length === 2) {
        // Declare it a match when both flipped indexes have the same imageId
        const match = game[flippedIndexes[0]].imageId === game[flippedIndexes[1]].imageId
        // If they match 
        if (match) {
        // We clone the game board to update the flipped values of those cards in the game array
          const newGame = [...game]
          // Setting the flipped indexes to true
          newGame[flippedIndexes[0]].flipped = true
          newGame[flippedIndexes[1]].flipped = true
          // And setting the game state to newGame
          setGame(newGame)

        // Then we update the game and set the third flippedIndexes value to be false, preventing a flip reset
          const newIndexes = [...flippedIndexes]
          newIndexes.push(false)
          setFlippedIndexes(newIndexes)
          // If not a match we leave the game board alone and add true to the flippedIndexes array,
          // triggering a flip reset.
        } else {
          const newIndexes = [...flippedIndexes]
          newIndexes.push(true)
          setFlippedIndexes(newIndexes)
        }
      }
        // This is what the function returns to the DOM
        return (
          <div id="cards">
            {/* Mapping the game array to render out the cards. Also passing down id, 
            image, game and both flipped hooks to each of the cards to use in the click handlers */}
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