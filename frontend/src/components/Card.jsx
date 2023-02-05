import React from "react"

const CardItem = ( object ) => {
    return (
        <div className="w-full h-36 md:h-48 object-cover cursor-pointer">
            <div className="w-full p-4 text-center">
                <h3 >{object.title}</h3>
                <p >{object.info}</p>
                <ul className='list-unstyled p-0'>
                {object.icon.map((icon, index) => (
                    <li key={index} className="test-left">
                        <img src={icon} width={20} alt={object.alt[index]}/><span>{object.description[index]}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default CardItem