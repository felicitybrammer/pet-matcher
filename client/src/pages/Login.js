import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'

import Auth from '../utils/auth';

import Button from 'react-bootstrap/esm/Button';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER, {update(cache, { data: { login } }) {
      console.log(cache);
      //update me object's cache
     
      cache.writeQuery({
          query: QUERY_ME,
          data: { ...login} 
      });
    }}) 
  
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
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
  
    return (
      <main className="flex-row justify-center mt-5">
        <div className="moveCard">
          <div className="card loginCard">
            <h4 className="card-header">Login</h4>
            <br/>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <h5>Email:</h5>
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
                <h5>Password:</h5>
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
  
              {error && <div>Login failed</div>}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Login;

  //<button className="btn d-block w-100 loginBtn" type="submit">Submit</button>

  // <main className="flex-row justify-center mt-4">
  // <div className="col-12 col-md-8">