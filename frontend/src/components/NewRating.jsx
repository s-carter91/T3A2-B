import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'

// HOW DO I ADD IN THE USER ID FROM STATE !
// How do I export the 
// actievUser is the state being imported

const NewRating = ({ activeUser }) => {
    const { game_id } = useParams()
    // const gameId= game_Id

    const [stars, setStars] = useState('')
    const userId = '63db5a04d111a98f4568a662'

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
                    onChange={(value) => {
                        setStars(value)
                    }}    
                />
                <button type='submit'>Send rating</button>
            </form>
        
        </>
    )
}

export default NewRating