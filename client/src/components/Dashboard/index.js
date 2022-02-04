import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PETS } from '../../utils/queries';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PetList from '../PetList';
import Quiz from '../QuizModal';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_PETS);
    const pets = data?.pets || [];
    console.log('Dashboard:', pets);

    const [quizShow, setQuizShow] = useState(false)

    return (
        <main>
            <div className="mb-2 quizBtn">
            <Button variant="warning" size="lg" onClick={() => setQuizShow(true)}>Take The Quiz To Find Your Matches!</Button>
            </div>
            
            <Modal
                size="lg"
                show={quizShow}
                onHide={() => setQuizShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Find your perfect new best friend!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><Quiz /></Modal.Body>
            </Modal>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <PetList pets={pets} />
            )}
        </main>
    )

}

export default Dashboard;