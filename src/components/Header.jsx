import React from 'react';
import '../assets/styles/header.css'
import Logo from '../assets/images/header_icon.jpg'


const Header = () => {

    return(
        <header className="header">

        <div className="grid-container-header">
            <div className="grid-item-icon">
            <a href="#"> <img className="header_icon" src={ Logo } alt="primevideo" /> </a>
            </div>
            <div className="grid-item-user">
                <ul>
                    <li>ES</li>
                    <li>Identificarse</li>
                </ul>
            </div>
        </div>
        </header>
    )
}

export default Header