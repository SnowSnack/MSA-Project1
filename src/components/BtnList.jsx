import React from "react";
import BtnItem from "./BtnItem";

const BtnList = ({ count, onRemove }) => {
  return (
    <div>
      <ul>
        {count.map((ct) => (
          <BtnItem key={ct.id} ct={ct} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  );
};

export default BtnList;
