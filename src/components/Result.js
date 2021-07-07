import React from 'react';
import '../scss/result.scss'

const Result = ({finishResult}) => {



    return (
        <div className="result__container">
            <div className="result">
                <h1>Twoje zapotrzebowanie</h1>
                <h2>{finishResult}</h2>
            </div>
            <div className="macro"/>


        </div>
    );
}

export default Result;