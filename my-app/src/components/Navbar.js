import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
    return (
        <div className='rightdiv'>
            <div className='searchdiv'>
                <input type='search' placeholder='Search Mail' />
                <img className='imgsearch' src='8666693_search_icon.png' alt='' />
            </div>


            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar