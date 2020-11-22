// Importing React Hooks
import React, { useState, useEffect } from "react";
// Importing React spring animation
import { useSpring, animated as a } from "react-spring";

// This is the Card setup
// Each card will have a flipped value on the individual component. This value works 
// with the useSpring hook below it to implement the flipping card animation.
function Card({
    id,
    image, 
    game,
    flippedCount,
    setFlippedCount,
    flippedIndexes,
    setFlippedIndexes,
  }) {
    // Setting the React spring Flip card animation
    const [flipped, set] = useState(false)
    const {transform, opacity} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80},
    })

    // More match logic in Effect Hook
    useEffect(() => {
      // If the third value in flippedIndexes is true we don’t have a match
      // Both conditions will add to the flippedCount and empty the flippedIndexes array
      if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
        // Using a setTimeout for 1 sec. to add a delay to cards flipping back.
        setTimeout(() => {
          set(state => !state)
          setFlippedCount(flippedCount + 1)
          setFlippedIndexes([])
        }, 1000)
      } else if (flippedIndexes[2] === false && id === 0) {
        setFlippedCount(flippedCount + 1)
        setFlippedIndexes([])
      }
    }, [flippedIndexes]) // Pass an array as an optional second argument to tell React 
    // to skip applying an effect if certain values haven’t changed between re-renders.

    // The click logic. Check if a card is allowed to be flipped.
    const onCardClick = () => {
      // The flippedCount variable will increase by one each time either the first guess is flipped, the 
      // second guess is flipped or the two cards match or don't match.
      if (!game[id].flipped && flippedCount % 3 === 0) {
        set(state => !state)
        setFlippedCount(flippedCount + 1)
        const newIndexes = [...flippedIndexes]
        newIndexes.push(id)
        setFlippedIndexes(newIndexes)
      } else if (
        flippedCount % 3 === 1 &&
        !game[id].flipped &&
        flippedIndexes.indexOf(id) < 0
      ) {
        set(state => !state)
        setFlippedCount(flippedCount + 1)
        const newIndexes = [...flippedIndexes]
        newIndexes.push(id)
        setFlippedIndexes(newIndexes)
      }
    }
     // Returning styles for the front and back of each card. We will apply the same background image 
     // to the back of every card, url is defined in the css and background images from the Images array to the front.
    return (
      <div onClick={onCardClick}>      
            <a.div
              className="c back"
              style={{
                opacity: opacity.interpolate(o => 1 - o),
                transform,
              }}
            />
            <a.div
              className="c front"
              style={{
                opacity,
                transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                background: `url(${image})` 
              }}
            />
      </div>
      )
}

export default Card;