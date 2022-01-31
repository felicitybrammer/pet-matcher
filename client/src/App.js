import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import HomeDash from './pages/HomeDash';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile'
//import Pet from './components/Pet
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomeDash} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:name?" component={UserProfile} />
              
              {/* <Route exact path="/pet/{pet.name}" component={PetProfile} />  */}
              
              <Route component={NoMatch} />
            </Switch>  
          </div>
      
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
