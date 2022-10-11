import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Qa.css'
const Qa = ({ a }) => {
    const { question, options, id, correctAnswer } = a
    // console.log(options)
    const notify = () => toast("Correct Answer!!", { position: 'top-center' })
    const notify2 = () => toast("Wrong Anwer!!", { position: 'top-center' })
    console.log(correctAnswer)

    const FindAnswer = (para) => {
        if (para === correctAnswer) {

            return notify()
        }
        else {
            return notify2()
        }

    }


    return (
        <div className='qa-div'>
            <h4>{question}</h4>
            <p>Correct ans:{correctAnswer}</p>

            <div className='input-div'>

                <div> <input className='bg-input' onClick={() => FindAnswer(options[0])} type="radio" value={options[0]} name={id} />{options[0]}</div>
                <div><input type="radio" onClick={() => FindAnswer(options[1])} value={options[1]} name={id} /> {options[1]}</div>
                <div><input type="radio" onClick={() => FindAnswer(options[2])} value={options[2]} name={id} /> {options[2]}</div>
                <div><input type="radio" onClick={() => FindAnswer(options[3])} value={options[3]} name={id} /> {options[3]}</div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Qa;