import React from 'react'
import '../components/Sidebar.css'


const Sidebar = () => {
    return (
        <div className='leftdiv'>
            <div className='img'>
                <img src='gmailicon.png' alt='Gmail Icon' /> <b>Gmail</b>
            </div>
            <button className='button'>Compose</button>
            <ul>
                <li>Inbox</li>
                <li>Starred</li>
                <li>Snoozed</li>
                <li>Send</li>
                <li>Drafts</li>
            </ul>

        </div>
    )
}

export default Sidebar