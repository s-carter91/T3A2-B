import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NewReview = ({ setReloadReview, activeUser, games}) => {
    const nav = useNavigate()

    const { game_Id } = useParams()
    const [ content, setContent ] = useState('')
    const [ thanksForReview, setThanksForReview] = useState(false)
    const userId = activeUser
    const thisGame = games.find(game => game._id === game_Id)

    // function that takes input data and sends to server
const addReview = async (game, content, user) => { 
    const newReview = {
      gameId: game, 
      content: content,
      userId : user
    }
    const insertedReview = await fetch(`https://t3a2-b-server-production.up.railway.app/reviews`,{ 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
    })
    setReloadReview(true)
    setThanksForReview(true)
    setTimeout(() => {
        nav(-1)
    }, 1000);
  }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addReview(game_Id, content, userId)
    }

    // Cancel button to nav back to games page
    const cancelButton = () => {
        nav(`/games/${game_Id}`)
      }

    return (
        <>
            <h3 className='text-center'>Review for {thisGame.name}</h3>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group d-flex row justify-content-center">
                    <img src={thisGame.image} alt={thisGame.name + 'image'}className='w-50 p-4'></img>
                    <textarea value={content} onChange={evt => setContent(evt.target.value)} className="form-control row-5" type="text"></textarea>
                    {content.length == 0 && <span className="alert-warning text-danger">Review Can't Be Empty</span>}

                    <button className="btn btn-success m-3" type="submit">Submit Review</button>
                    {thanksForReview ? <p>Thank you for the review</p>:
                    <></>}
                    <button className="btn btn-success" type="button" onClick={cancelButton}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default NewReview