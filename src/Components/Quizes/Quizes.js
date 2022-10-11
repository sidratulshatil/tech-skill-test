import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qa from '../Qa/Qa';
import './Quizes.css'
const Quizes = () => {
    const a = useLoaderData()
    const { data, correctAnswer } = a
    const { total, questions } = data

    return (
        <div>
            <h2 className='mt-4 '>Quizes Of:-{a.data.name}</h2>

            {
                data.questions.map(a => <Qa key={a.id} a={a}></Qa>)
            }
        </div>
    );
};

export default Quizes;