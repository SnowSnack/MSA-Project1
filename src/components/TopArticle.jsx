import React from 'react';
import ContentList from "./ContentList";
import Introduce from "./Introduce";

import "../css/TopArticle.css"

const TopArticle = () => {
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

export default TopArticle;