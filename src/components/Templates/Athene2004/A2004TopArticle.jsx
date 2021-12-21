import React from 'react';
import ContentList from "./A2004ContentList";
import Introduce from "./A2004Introduce";

import "../../../css/Templates/Athene2004/A2004TopArticle.css"

const A2004TopArticle = () => {
    return (
        <table className = "top-a-container">
            <tr>
            <td className = "top-aside">

        </td>
            <div className="top-article">
                <Introduce></Introduce>
                <ContentList></ContentList>
                
    
        </div>
<td className = "top-aside">

</td>
            </tr>
            
        </table>
        
    );
};

export default A2004TopArticle;