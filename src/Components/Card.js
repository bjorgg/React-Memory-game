import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import Images from "./Images";

function Card({
    id,
   // Images, // Image, shape or text ... <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    game,
    flippedCount,
    setFlippedCount,
    flippedIndexes,
    setFlippedIndexes,
  }) {
    // const [image, setImage] = useState([]) 
    const [flipped, set] = useState(false)
    const {transform, opacity} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80},
    })

    useEffect(() => {
        console.log('Flipped Indexes Changed')
    }, [flippedIndexes])

    const onCardClick = () => {
        console.log('Card Clicked')
        set(state => !state)
    }
    
    return (
        <div onClick={onCardClick}>
         
          {Images
            .sort(() => Math.random() - 0.5)
            .map(({pic}) => {
              return (
                <div>
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
                  background: `url(${pic})` 
                }}
              />
              </div>
              );
            
            })
          }
         
      </div>
      )
}

export default Card;