import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import activeUser from './App.jsx'

const NewReview = () => {
    const nav = useNavigate()

    const { game_Id } = useParams()
    // const gameId= game_Id
    const [ reviews, setReview ] = useState([])
    const [ content, setContent ] = useState('')
    const userId = activeUser
    console.log(userId)

// 
const addReview = async (game, content, user) => { 
    // const id = reviews.length
    // games.find((game => game.name === game))
    // add a new entry
    const newReview = {
      gameId: game, 
      content: content,
      userId : user
    }
    const insertedReview = await fetch('http://localhost:4002/reviews',{ 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
      })
      const data = await insertedReview.json()
      setReview([...reviews, data])
      nav(`/games`)
  }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addReview(game_Id, content, userId)
        console.log(game_Id, userId, content)
    }

    // Cancel button to nav back to games page
    const cancelButton = () => {
        nav(`/games/${game_Id}`)
      }

    return (
        <>
            <h3>Review for {`${game_Id}`}</h3>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Review</label>
                    <input value={content} onChange={evt => setContent(evt.target.value)} className="form-control" type="text"></input>
                    {content.length == 0 && <span className="alert-warning"> Please enter content</span>}
                
                    <button className="btn btn-success" type="submit">Submit Review</button>
                    <button className="btn btn-success" type="button" onClick={cancelButton}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default NewReview