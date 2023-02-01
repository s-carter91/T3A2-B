import React, { useState } from 'react'

const NewReview = ({ gameid }) => {
    const { gameid } = useParams()
    const [ reviews, setReview ] = useState('')

const addReview = async (game, content, user) => { // adding this function to the entry/new route allows the route to create an entry
    const id = entries.length
    games.find((game => game.name === game))
    // add a new entry
    const newReview = {
      gameId: game, 
      content: content,
      userId : user
    }
    const returnedReview = await fetch('http://localhost:4002/reivews',{ 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json' // only need quotes on key if it is multiple words
        },
        body: JSON.stringify(newReview) // the one place it won't stringify itself
      })
      const data = JSON.parse(returnedReview.json)
      setReview([...reviews, data]) // using expansion operator creates a new array from the current array and adds in the new one
      nav(`/users`)
}
}

