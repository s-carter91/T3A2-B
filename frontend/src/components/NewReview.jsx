import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NewReview = ({ setReloadReview, activeUser, games}) => {
    const nav = useNavigate()

    const { game_Id } = useParams()
    const [ content, setContent ] = useState('')
    const [ thanksForReview, setThanksForReview] = useState(false)
    const userId = activeUser
    const thisGame = games.find(game => game._id === game_Id)
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
    // const data = await insertedReview.json() 
    console.log(insertedReview)
    setReloadReview(true)
    setThanksForReview(true)
    setTimeout(() => {
        nav(-1)
    }, 1000);
  }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addReview(game_Id, content, userId)
        // console.log(game_Id, userId, content)
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
                    {/* <div className='w-25'> */}
                        <img src={thisGame.image} alt={thisGame.name + 'image'}className='w-50 p-4'></img>
                    {/* </div> */}
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