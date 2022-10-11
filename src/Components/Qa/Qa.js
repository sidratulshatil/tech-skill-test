import React from 'react';
import './Qa.css'
const Qa = ({ a }) => {
    const { question, options, id, correctAnswer } = a
    console.log(options)
    return (
        <div className='qa-div'>
            <h4>{question}</h4>

            <div className='input-div'>
                <div> <input className='bg-input' type="radio" value={options[0]} name={id} />{options[0]}</div>
                <div><input type="radio" value={options[1]} name={id} /> {options[1]}</div>
                <div><input type="radio" value={options[2]} name={id} /> {options[2]}</div>
                <div><input type="radio" value={options[3]} name={id} /> {options[3]}</div>
            </div>

        </div>
    );
};

export default Qa;