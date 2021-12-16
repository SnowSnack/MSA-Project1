import React from "react";

const BtnItem = ({ ct, onRemove }) => {
  return (
    <div>
      <button onClick={() => onRemove(ct.id)}>삭제</button>
    </div>
  );
};

export default BtnItem;
