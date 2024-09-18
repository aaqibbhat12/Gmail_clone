import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
    return (
        <div className='rightdiv'>
            <div className='searchdiv'>
                <input type='search' placeholder='Search Mail' />
                <img className='imgsearch' src='8666693_search_icon.png' alt='' />
                <img className='options' src='options.png' alt='' />

            </div>



            <div className='imgdiv'>
                <li><img className='firstimg' src='question.png' alt='' /></li>
                <li><img className='secondimg' src='setting.png' alt='' /></li>
                <li><img className='thirdimg' src='dots-menu.png' alt='' /></li>
                <li><img className='fourthimg' src='letter-a.png' alt='' /></li>
            </div>

        </div>
    )
}

export default Navbar