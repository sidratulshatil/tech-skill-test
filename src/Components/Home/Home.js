import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
const Home = () => {
    const quizs = useLoaderData()
    console.log(quizs.data)
    return (
        <div>
            <h2>header need</h2>
            <div className='d-flex '>
                {
                    quizs.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;