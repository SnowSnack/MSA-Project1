import React from 'react';
import '../../../css/Templates/Beijing2008/B2008Introduce.css';
import B2008ITable1Column from './B2008ITable1Column';
import B2008ITable2Column from './B2008ITable2Column';
const B2008Introduce = () => {
    return (
<>    
    <div className="container" id = "b2008container">
        <div className="panel panel-default">
            <div className="panel-heading">
                <span></span>
            </div>
            <div className="panel-body">
                <B2008ITable1Column></B2008ITable1Column>
                <B2008ITable2Column></B2008ITable2Column>
            </div>
        </div>
    </div>
</>
    );
};

export default B2008Introduce;