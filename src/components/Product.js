import React from 'react';

const Product = ({productData}) => {





    return (
        <li>
            <div className="grammage">100g</div>
            <div className="item">
                <h5>Jogurt</h5>
                <div className="schedule">
                    <p>Kcal: 0</p>
                    <p>Białko: 0</p>
                    <p>Węglowodany: 0</p>
                    <p>Tłuszcze: 0</p>
                </div>
            </div>
            <div className="button__container">
                <button className="btn__">...</button>
            </div>
        </li>
    );
};

export default Product;