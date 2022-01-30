import React, { useEffect } from 'react';
import './D3.css'

const D3 = () => {
    const arr = []
for(let i = 0; i< 55 ; i++){
    arr.push(<div className="contain"></div>)
}
    return (
        <>
            <h1>illusion</h1>
            <div className="container">
               {
                   arr.map((v,i)=>{
                       return v
                   })
               }
            </div>
        </>
    )
};

export default D3;
