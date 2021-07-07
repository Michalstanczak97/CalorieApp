import React from 'react';
import '../scss/result.scss'

const Result = ({finishResult}) => {



    return (
        <div className="result__background">
            <div className="result__container">
            <div className="result">
                <h1>Twoje zapotrzebowanie:</h1>
                <h2>{finishResult} kcal</h2>
            </div>
             <hr/>
             <div className="macro__container">
                <div className="macro">
                <h1>Białko</h1>
                <h2>180</h2>
                </div>
                <hr/>
                <div className="macro">
                    <h1>Węglowodany</h1>
                    <h2>400</h2>
                </div>
                <hr/>
                <div className="macro">
                    <h1>Tłuszcz</h1>
                    <h2>85</h2>
                </div>
             </div>
            </div>
        </div>
    );
}

export default Result;