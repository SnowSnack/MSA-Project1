import React from 'react';
import '../../../css/Templates/Athene2004/A2004Introduce.css';
import A2004ITable1Column from './A2004ITable1Column';
import A2004ITable2Column from './A2004ITable2Column';
const A2004Introduce = () => {
    return (
<>    
    <div className="container" id="a2004container">
        <div className="panel panel-default">
            <div className="panel-heading">
                <span></span>
            </div>
            <div className="panel-body">
                <A2004ITable1Column></A2004ITable1Column>
                <A2004ITable2Column></A2004ITable2Column>
            </div>
        </div>
    </div>
</>
    );
};

export default A2004Introduce;