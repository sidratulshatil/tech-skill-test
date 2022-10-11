import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qa from '../Qa/Qa';

const Quizes = () => {
    const a = useLoaderData()
    const { data, correctAnswer } = a
    const { total, questions } = data

    return (
        <div>
            <h2>Quizes Of:-{a.data.name}</h2>

            {
                data.questions.map(a => <Qa a={a}></Qa>)
            }
        </div>
    );
};

export default Quizes;