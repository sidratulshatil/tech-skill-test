import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {

    const { name, logo, total, id } = quiz

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/quizes/${id}`)
    }
    return (
        <div className='mt-5 bg'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Total Quiz: {total}</p>
                    </Card.Text>
                    <Button onClick={handleNavigate} variant="primary">Take Quizes</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quiz;