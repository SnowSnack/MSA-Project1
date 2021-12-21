import React from 'react';

import img1 from '../../../resources/imgs/A2004Introduce1.jpg'
import img2 from '../../../resources/imgs/A2004Introduce2.jpg'
import '../../../css/Templates/Athene2004/A2004ITable1Column.css';

const A2004ITable1Column = () => {
    return (
        <div>
            <table className="table-1column">
                        <thead>
                            <td>아테네 올림픽</td>
                        </thead>
                    
                    <tbody className="top-body">
                        <tr>Αγώνες της 28ης Ολυμπιάδας</tr>
                        <tr>제28회 올림픽 경기대회</tr>
                        <tr className='bigText'>Θερινοί Ολυμπιακοί Αγώνες 2004</tr>
                        <tr className='bigText'>2004 아테네 올림픽 경기대회</tr>
                        <tr className='bigText'>Games of the XXIX Olympiad™ Athens 2004</tr>
                        <tr className = "img"><img src={img1} alt="" /></tr>
                        <tr className = "img"><img src={img2} alt="" /></tr>
                    </tbody>
                    
                </table>
        </div>
    );
};

export default A2004ITable1Column;