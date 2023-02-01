import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewReview = ({ addReview }) => {
    const { game_Id } = useParams()
    // const gameId= game_Id

    const [content, setContent] = useState('')
    const userId = '63d14625a9c87120c737c106'

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addReview(game_Id, content, userId)
        console.log(game_Id, userId, content)
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
                </div>
            </form>
        </>
    )
}

export default NewReview