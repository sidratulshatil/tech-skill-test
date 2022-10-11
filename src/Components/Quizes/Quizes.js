import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qa from '../Qa/Qa';

const Quizes = () => {
    const a = useLoaderData()
    const { data } = a
    const { total } = data

    const FindAnswer = (para) => {
        console.log(para)
    }
    // console.log(data.questions)
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