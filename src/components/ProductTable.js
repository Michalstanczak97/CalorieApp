import React, {useEffect, useState} from 'react';
import Result from "./Result";
import '../scss/productTable.scss'
import {logDOM} from "@testing-library/react";
import Product from "./Product";



const ProductTable = ({finishResult}) => {
    const [query, setQuery] = useState("")
    const [productsList, setProductsList] = useState([])



    const getApi = () => {
        const baseURL = `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${query}`
        fetch(baseURL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7c34178d6dmshf4859ef0c41e4d3p1e8fc5jsnf4195341edbc",
                "x-rapidapi-host": "calorieninjas.p.rapidapi.com"
            }
            })
            .then(response => response.json())
            .then(data => {
                if (data.items.length !== 0) {
                setProductsList(prev => [...prev, data.items[0]])
                console.log(productsList)
                }
            })

            .catch(err => {
                console.error(err);
            });

    };

        const getValue = (e) => {
           const inputValue = e.target.value;
           setQuery(inputValue);
        }





    return (
        <>
        <div>
            <Result finishResult={finishResult}/>
        </div>
    <div className="product__table">
        <div className="your__product_container">
            <div className="search">
                <h1>Policz ile jesz w ciągu dnia</h1>
                <input onChange={getValue} type="text" placeholder="wpisz swój produkt"/>
            </div>
            <h2>Posiłek 1</h2>
            <div className="product__list">
                <ul>
                    {productsList.map(product => {
                        return <Product productData={product}/>
                        }
                    )}
                </ul>
                </div>
                <div className="add__cancel__button">
                    <button onClick={getApi} className="btn__">Dodaj Produkt</button>
                    <button className="btn__">Usuń posiłek</button>
                </div>
                <div className="summary__table">
                    <div className="sum"/>
                    <div className="protein__sum"/>
                    <div className="carbs__sum"/>
                    <div className="fat__sum"/>
                </div>
            </div>
        {/*</div>*/}
        </div>
        </>
    );
}

export default ProductTable;