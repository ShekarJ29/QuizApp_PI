import React, { useContext } from 'react';

import DataContext from '../dataContext/dataContext';
import './Start.css';

/*
const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);
    return (

        <div className="container">
            <button onClick={startQuiz} className="startQuiz">Start Quiz</button>
        </div>

    );
};

export default Start;

*/

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);
    return (

        <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
                <div className="col-lg-8">
                    <button onClick={startQuiz} className="startQuiz">Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Start;