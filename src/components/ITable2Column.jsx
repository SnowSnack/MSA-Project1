import React from 'react';

import '../css/ITable2Column.css';

const ITable2Column = () => {
    return (
        <div>
            <table className="table-2column">
                    <thead>
                        
                    </thead>
                      
                    <tbody className="bottom-body"> 
                        <tr>
                            <th>대회기간</th>
                            <td>2004년 8월 13일~2004년 8월 29일</td>
                        </tr>   
                        <tr>    
                            <th>개최국</th>
                            <td>그리스 아테네</td>
                        </tr>
                       <tr>
                            <th>슬로건</th>
                            
                            <tr>
                                <td className='border'>Καλώς ήλθατε σπίτι</td>
                            </tr>
                            <tr>
                                <td className='border'>Welcome Home</td>
                            </tr>
                            <tr>
                                <td>(집에 오신 걸 환영합니다)</td>
                            </tr>
                        </tr>
                        <tr>
                            <th>마스코트</th>
                            <td>페보스, 아테나</td>
                        </tr>
                        <tr>
                            <th>주제가</th>
                            <td>Olympic Dream</td>
                        </tr>
                        <tr>
                            <th>참가국</th>
                            <td>201개국</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};

export default ITable2Column;