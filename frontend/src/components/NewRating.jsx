import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'

const NewRating = ({ activeUser, setReloadRating }) => {
    const { game_id } = useParams()
    // const gameId= game_Id

    const [ stars, setStars ] = useState('')
    const [ ratingDuplicate, setRatingDuplicate ] = useState(null)
    const [ showButtonStars, setShowButtonStars] = useState(true)
    const userId = activeUser._id

    // function to add rating and set states if the user has already rather this game
    const addRating = async () => { 
            const newRating = { 
                stars: stars,
                userId : userId
            }
            const insertedRating = await fetch(`https://t3a2-b-server-production.up.railway.app/ratings/${game_id}`,{ 
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRating)
                })
                const data = await insertedRating.json()
                if (insertedRating.status===409) {
                    setRatingDuplicate(true)
                    setStars(data)
                } else{
                    setStars(data)
                    setRatingDuplicate(false)
                }
                setShowButtonStars(false)
                setReloadRating(true)
    } 

    const starsSubmit = (evt) => {
        evt.preventDefault()
        addRating(game_id, stars, userId)
    }
    return (
        <>
            <form onSubmit={starsSubmit}>
            {showButtonStars ?
                <> 
                    <Rate 
                        style={{backgroundColor : "darkgreen", marginBottom: "1vw"}}
                        onChange={(value) => {
                            setStars(value)
                        }}    
                    />                  
                    <button type="button" onClick={addRating} className="btn btn-outline-primary my-1 mx-1" >Send Rating</button>    
                </>:
                    <p>Thank you for your rating</p>
                   }
                    {ratingDuplicate ? <p>You had already rated this game. Your score has been updated!</p> :
                    <>
                    </>}  
            </form>
        </>
    )
}

export default NewRating