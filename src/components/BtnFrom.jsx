import React from "react";
import { useRef } from "react/cjs/react.development";

const BtnFrom = ({ btnAdd }) => {
  const idBtn = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    btnAdd();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button ref={idBtn}>추가 버튼임</button>
      </form>
    </div>
  );
};

export default BtnFrom;
