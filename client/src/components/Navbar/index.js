import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Navbar = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

      const [checked, setChecked] = useState(false);
      const [radioValue, setRadioValue] = useState('1');


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
                            <ToggleButton
                                type="radio"
                                name="radio"
                                value= "1"
                                variant="outline-danger"
                                checked={checked}
                                onChange={(e) => setRadioValue(e.currentTarget.checked)}
                            >
                              <Link className = "link" to="/profile">Profile</Link>
                            </ToggleButton>

                            {/* <Link to="/about">About</Link>
                            <Link to="/contact">Contact Us</Link> */}
                    <ToggleButton
                        type="radio"
                        name="radio"
                        value= "2"
                        variant="outline-danger"
                        checked={checked}
                        onChange={(e) => setRadioValue(e.currentTarget.checked)}
                        onClick={logout}
                    >
                        <Link className = "link" to="/logout">Logout</Link>
                    </ToggleButton>
                </>
                ) : (
                <>
                    <ToggleButton
                        type="radio"
                        name="radio"
                        value= "1"
                        variant="outline-danger"
                        checked= {checked}
                        onChange={(e) => setRadioValue(e.currentTarget.checked)}
                    >
                      <Link className = "link" to="/login">Login</Link>
                    </ToggleButton>

                    <ToggleButton
                        type="radio"
                        name="radio"
                        value= "2"
                        variant="outline-danger"
                        checked={checked}
                        onChange={(e) => setRadioValue(e.currentTarget.checked)}
                    >
                        <Link className = "link" to="/signup">Sign Up</Link>
                    </ToggleButton>
                </>
                    )}
            </nav>
   


        </div>

        </header >
    )
}

export default Navbar;