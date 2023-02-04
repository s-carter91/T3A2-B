import React from "react"
import data from "../data"

// cardInfo = [
//     { title: "Games", description: "View and search through a list of games" },
//     { title: "Profile", description: "View your profile" },
//     { title: "Random", description: "something else"}
// ]
// const dataer = {gamesCard: [
//     {
//         title: "Games",
//         info: "This is where you come to game",
//         icon: ['/images/view.svg', '/images/search.svg'],
//         alt: ['view icon', 'search icon'],
//         description: ['View a Large Catalogue of Games', 'Search to Find the Games For You']
//     },
//     {
//         title: "Profile",
//         info: "This is where you can view your profile",
//         icon: '/images/search.svg',
//         alt: 'search icon',
//         description: 'Search to Find the Games For You'
//     }
// ]}

const CardItem = ( object ) => {
    return (
        <div className="w-full h-36 md:h-48 object-cover cursor-pointer">
            <div className="w-full p-4 text-center">
                <h3 >{object.title}</h3>
                <p >{object.info}</p>
                <ul className='list-unstyled p-0'>
                {object.icon.map((icon, index) => (
                    <li className="test-left">
                        <img src={icon} width={20} alt={object.alt[index]}/><span>{object.description[index]}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

// const cardDetails = () => (
// <ul>
//     {data.gamesCard.map((icon, alt, description) => (
//     <li>
//         <img src={icon} alt={alt} /> <p>{description}</p>
//     </li>
//     ))}
// </ul>
// )
// function Card () {
//     return(
//         <div className=""
//     )
// }

export default CardItem