import React, { useState } from "react";
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_PETS } from '../utils/queries';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PetList from '../components/PetList';
import Carousel from 'react-bootstrap/Carousel';
import Dashboard from "../components/Dashboard";
import Home from '../components/Home';

const HomeDash = () => {

    const loggedIn = Auth.loggedIn();

    return (
        <main>
            {loggedIn ? (
            <Dashboard />
            ) : (<Home />)}

        </main>


    )
}

export default HomeDash;