import React from 'react';
import Result from "./Result";
const ProductTable = ({finishResult}) => {
    console.log(finishResult)
    return (
        <div>
            <Result finishResult={finishResult}/>
        </div>
    );
};

export default ProductTable;