import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Quiz = ({ quiz }) => {

    const { name, logo, total } = quiz
    return (
        <div className='mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Total Quiz: {total}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quiz;