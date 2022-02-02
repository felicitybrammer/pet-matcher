import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Navbar from 'react-bootstrap/Navbar';

import okcLogo from '../../assets/images/clear8.jpg';

const NavBar = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const [checked, setChecked] = useState(false);

    // style={{ display: 'flex', justifyContent: 'flex-end' }}

    return (
        <Navbar expand="lg" variant="dark" className="nav" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="navLogo">
                <Link><img to="/" className="logoBtn" src={okcLogo} alt="OkCreature's logo"></img></Link>
                {/* <span role='img' aria-label='code'>
                    {' '}
                    <FontAwesomeIcon icon={faCode} />
                </span> */}
            </div>

            <div>
                <Link className="link" to="/">
                    <h1 className="title">OkCreature</h1>
                </Link>
            </div>

            <div className="navBtn">
                {Auth.loggedIn() ? (
                    <>
                        <ToggleButton
                            type="radio"
                            name="radio"
                            value="1"
                            variant="warning"
                            checked={checked}
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            <Link className="link2" to="/profile">Profile</Link>
                        </ToggleButton>

                        {/* <Link to="/about">About</Link>
                            <Link to="/contact">Contact Us</Link> */}
                        <ToggleButton
                            type="radio"
                            name="radio"
                            value="2"
                            variant="warning"

                            checked={checked}
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                            onClick={logout}
                        >
                            <Link className="link2" to="/logout">Logout</Link>
                        </ToggleButton>
                    </>
                ) : (
                    <>
                        <ToggleButton
                            type="radio"
                            name="radio"
                            value="1"
                            variant="outline-warning"
                            checked={checked}
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            <Link className="link" to="/login">Login</Link>
                        </ToggleButton>
                       

                        <ToggleButton
                            type="radio"
                            name="radio"
                            value="2"
                            variant="outline-warning"
                            checked={checked}
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            <Link className="link" to="/signup">Sign Up</Link>
                        </ToggleButton>
                    </>
                )}
            </div>


        </Navbar>

    )
}

export default NavBar;
