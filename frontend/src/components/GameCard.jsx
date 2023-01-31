import React from 'react'

const GameCard = (props) => {
    const { _id, name, genre, platform, multiplayer, time_to_complete, image }= props.game
  return (
    <div>
        <img src={image} alt={name} />
        <article>Game: {name}</article>
        <p> 
            Genre: {genre}
            Platform: {platform}
            Multiplayer: {multiplayer}
            Time to complete: {time_to_complete}
        </p>
    </div>
  )
}

export default GameCard