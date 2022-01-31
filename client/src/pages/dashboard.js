import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PETS } from '../utils/queries';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PetList from '../components/PetList';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_PETS);
    const pets = data?.pets || [];
    console.log(pets);

    const [quizShow, setQuizShow] = useState(false)

    return (
        <main>
            <Button variant="primary" onClick={() => setQuizShow(true)}> take quiz</Button>
            <Modal
                size="lg"
                show={quizShow}
                onHide={() => setQuizShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
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