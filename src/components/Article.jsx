import React, { useRef, useState } from "react";
import BtnFrom from "./BtnFrom";
import BtnList from "./BtnList";
import Search from "./Search";

const Article = () => {
  const no = useRef(1);
  const [count, setCount] = useState([]);

  const handleAdd = (id) => {
    setCount([
      ...count,
      {
        id: no.current++,
      },
    ]);
  };

  const handleRemove = (id) => {
    setCount(count.filter((ct) => ct.id !== id));
  };
  return (
    <div>
      <article style={{ color: "white" }}>
        <h1>아티클</h1>
        <Search />
        <BtnFrom btnAdd={handleAdd} />
        <BtnList count={count} onRemove={handleRemove} />
      </article>
    </div>
  );
};

export default Article;
