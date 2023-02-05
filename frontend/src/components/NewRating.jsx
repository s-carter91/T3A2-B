import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'
import activeUser from './App.jsx'

// HOW DO I ADD IN THE USER ID FROM STATE !
// How do I export the 
// actievUser is the state being imported

const NewRating = ({ activeUser, setReloadRating }) => {
    const { game_id } = useParams()
    // const gameId= game_Id

    const [ stars, setStars ] = useState('')
    const [ ratingDuplicate, setRatingDuplicate ] = useState(null)
    const [ showButtonStars, setShowButtonStars] = useState(true)
    const userId = activeUser._id
    // console.log(userId)

    const addRating = async () => {
        try {
            console.log(userId)
            const newRating = { 
                stars: stars,
                userId : userId
            }
            const insertedRating = await fetch(`${process.env.API_URL}/ratings/${game_id}`,{ 
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRating)
                })
                const data = await insertedRating.json()
                console.log(data)
                if (insertedRating.status===409) {
                    setRatingDuplicate(true)
                    setStars(data)
                } else{
                    setStars(data)
                    setRatingDuplicate(false)
                }
                setShowButtonStars(false)
                setReloadRating(true)
            } catch (err) {
                console.log(err)
        }
    } 

    const starsSubmit = (evt) => {
        evt.preventDefault()
        addRating(game_id, stars, userId)
        console.log(game_id, userId, stars)
    }
    return (
        <>
            <form onSubmit={starsSubmit}>
            {showButtonStars ?
                <>
                    <Rate 
                        // defaultValue={stars}
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