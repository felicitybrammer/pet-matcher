import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <span role='img' aria-label='code'>
                {' '}
                <FontAwesomeIcon icon={faCode} />
            </span>
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <h1>OkCreature</h1>
                </Link>

                <nav className="text-center">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
            </div>

        </header>
    )
}

export default Navbar;