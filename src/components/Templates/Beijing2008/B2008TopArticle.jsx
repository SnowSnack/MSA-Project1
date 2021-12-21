import React from 'react';
import ContentList from "./B2008ContentList";
import Introduce from "./B2008Introduce";

import "../../../css/Templates/Beijing2008/B2008TopArticle.css"

const B2008TopArticle = () => {
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

export default B2008TopArticle;