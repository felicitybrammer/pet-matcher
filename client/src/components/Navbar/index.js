import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 

function Navbar() {
    return (
        <header>
            <span role='img' aria-label='code'>
                {' '}
                <FontAwesomeIcon icon={faCode} />
            </span>
            <h1>App Title</h1>
        </header>
    )
}

export default Navbar;