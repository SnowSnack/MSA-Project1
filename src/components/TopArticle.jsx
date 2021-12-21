import React from 'react';
import ContentList from "./ContentList";
import Introduce from "./Introduce";

const TopArticle = () => {
    return (
        <div className="top-article">
            <ContentList></ContentList>
            <Introduce></Introduce>
        </div>
    );
};

export default TopArticle;