import React from "react"
import data from "../data"

// cardInfo = [
//     { title: "Games", description: "View and search through a list of games" },
//     { title: "Profile", description: "View your profile" },
//     { title: "Random", description: "something else"}
// ]
const dataer = {gamesCard: [
    {
        icon: '/images/view.svg',
        alt: 'view icon',
        description: 'View a Large Catalogue of Games'
    },
    {
        icon: '/images/search.svg',
        alt: 'search icon',
        description: 'Search to Find the Games For You'
    }
]}

function CardItem( title, description ) {
    return (
        <div className="w-full h-36 md:h-48 object-cover cursor-pointer">
            <div className="w-full p-4">
                <h3 className="text-center">{title}</h3>
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

const cardDetails = () => (
<ul>
    {data.gamesCard.map((icon, alt, description) => (
    <li>
        <img src={icon} alt={alt} /> <p>{description}</p>
    </li>
    ))}
</ul>
)
// function Card () {
//     return(
//         <div className=""
//     )
// }

export default CardItem