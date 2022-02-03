import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Button from 'react-bootstrap/esm/Button';

const Signup = () => {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <main className="flex-row justify-center mt-5">
        <div className="moveSignCard">
          <div className="card loginCard">
            <h4 className="card-header">Sign Up</h4>
            <br/>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
              <h5>Your Name:</h5>
                <input
                  className="form-input"
                  placeholder="Your name"
                  name="name"
                  type="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                />
                <br />
                <br />
                <h5>Your Email:</h5>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <br />
                <br />
                <h5>Your Password:</h5>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <br />
                <br />
                <div className="d-grid gap-2">
                  <Button type="submit" variant="warning" size="lg">
                    Submit
                  </Button>
                </div>
              </form>
  
              {error && <div>Signup failed</div>}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
export default Signup;

//<button className="btn d-block w-100" type="submit">
// Submit
// </button>