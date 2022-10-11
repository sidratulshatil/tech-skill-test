import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
const Home = () => {
    const quizs = useLoaderData()

    return (
        <div>
            <h2 className='mt-5'>Take the Free Practice Test</h2>
            <p>By Click on '<strong>Take Quizes</strong>' Button you can answer some questions on mentioned topic,and it's totaly free!!  </p>
            <div className='d-flex '>
                {
                    quizs.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;