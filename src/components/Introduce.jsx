import React from 'react';
import '../css/Introduce.css';
import ITable1Column from './ITable1Column';
import ITable2Column from './ITable2Column';
const Introduce = () => {
    return (
<>    
    <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
                <span></span>
            </div>
            <div className="panel-body">
                <ITable1Column></ITable1Column>
                <ITable2Column></ITable2Column>
            </div>
        </div>
    </div>
</>
    );
};

export default Introduce;