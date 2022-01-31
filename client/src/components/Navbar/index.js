import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Navbar from 'react-bootstrap/Navbar'
const NavBar = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const [checked, setChecked] = useState(false);


    return (
        <Navbar expand="lg"  variant="dark" className="nav">
            <div>
                {/* <span role='img' aria-label='code'>
                    {' '}
                    <FontAwesomeIcon icon={faCode} />
                </span> */}
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
                        variant="outline-danger"
                        checked={checked}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        <Link className="link" to="/profile">Profile</Link>
                    </ToggleButton>

                    {/* <Link to="/about">About</Link>
                            <Link to="/contact">Contact Us</Link> */}
                    <ToggleButton
                        type="radio"
                        name="radio"
                        value="2"
                        variant="outline-danger"
                        checked={checked}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                        onClick={logout}
                    >
                        <Link className="link" to="/logout">Logout</Link>
                    </ToggleButton>
                </>
            ) : (
                <>
                    <ToggleButton
                        type="radio"
                        name="radio"
                        value="1"
                        variant="outline-danger"
                        checked={checked}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        <Link className="link" to="/login">Login</Link>
                    </ToggleButton>

                    <ToggleButton
                        type="radio"
                        name="radio"
                        value="2"
                        variant="outline-danger"
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