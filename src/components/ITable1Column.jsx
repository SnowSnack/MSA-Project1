import React from 'react';

import img1 from '../resources/imgs/Introduce1.jpg'
import img2 from '../resources/imgs/Introduce2.jpg'
import '../css/ITable1Column.css';

const ITable1Column = () => {
    return (
        <div>
            <table className="table-1column">
                        <thead>
                            <h1>아테네 올림픽</h1>
                        </thead>
                    
                    <tbody>
                        <tr>Αγώνες της 28ης Ολυμπιάδας</tr>
                        <tr>제28회 올림픽 경기대회</tr>
                        <tr>Θερινοί Ολυμπιακοί Αγώνες 2004</tr>
                        <tr>2004 아테네 올림픽 경기대회</tr>
                        <tr>Games of the XXIX Olympiad™ Athens 2004</tr>
                        <tr className = "img"><img src={img1} alt="" /></tr>
                        <tr className = "img"><img src={img2} alt="" /></tr>
                    </tbody>
                    
                </table>
        </div>
    );
};

export default ITable1Column;