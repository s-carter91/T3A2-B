import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'
import activeUser from './App.jsx'

// HOW DO I ADD IN THE USER ID FROM STATE !
// How do I export the 
// actievUser is the state being imported

const NewRating = ({ activeUser }) => {
    const { game_id } = useParams()
    // const gameId= game_Id

    const [stars, setStars] = useState('')
    const userId = activeUser._id
    console.log(userId)

    const addRating = async () => {
        const newRating = { 
            stars: stars,
            userId : userId
          }
          const insertedRating = await fetch(`http://localhost:4002/ratings/${game_id}`,{ 
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newRating)
            })
            const data = await insertedRating.json()
            setStars(data)
    } 

    const starsSubmit = (evt) => {
        evt.preventDefault()
        addRating(game_id, stars, userId)
        console.log(game_id, userId, stars)
    }
    return (
        <>
            <form onSubmit={starsSubmit}>
                <Rate 
                    defaultValue={stars}
                    style={{backgroundColor : "darkgreen", marginBottom: "1vw"}}
                    onChange={(value) => {
                        setStars(value)
                    }}    
                />
                <div>
                    <button type="button" className="btn btn-outline-primary my-1 mx-1" >Send Rating</button>
                </div>
            </form>
        
        </>
    )
}

export default NewRating