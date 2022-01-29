import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

    <div>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
    </ApolloProvider>
  );
}

export default App;
