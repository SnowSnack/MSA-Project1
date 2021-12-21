import React from 'react';

import img1 from '../../../resources/imgs/B2008Introduce1.jpg'
import img2 from '../../../resources/imgs/B2008Introduce2.jpg'
import '../../../css/Templates/Beijing2008/B2008ITable1Column.css';

const B2008ITable1Column = () => {
    return (
        <div>
            <table className="table-1column">
                        <thead>
                            <td>2008 베이징 올림픽</td>
                        </thead>
                    
                    <tbody className="top-body">
                        <tr>第二十九届夏季奥林匹克运动会</tr>
                        <tr>제29회 올림픽 경기대회</tr>
                        <tr className='bigText'>2008年夏季奥运会</tr>
                        <tr className='bigText'>2008 베이징 올림픽 경기대회</tr>
                        <tr className='bigText'>Games of the XXIX Olympiad™ Beijing 2008</tr>
                        <tr className = "img"><img src={img1} alt="" /></tr>
                        <tr className = "img"><img src={img2} alt="" /></tr>
                    </tbody>
                    
                </table>
        </div>
    );
};

export default B2008ITable1Column;