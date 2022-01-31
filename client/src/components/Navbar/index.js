import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navbar = () => {
    
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    
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
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/profile">My Profile</Link>
                            {/* <Link to="/about">About</Link>
                            <Link to="/contact">Contact Us</Link> */}
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>

        </header>
    )
}

export default Navbar;