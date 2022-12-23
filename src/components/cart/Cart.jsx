import React from 'react';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="currency_wrapper">
      <p>
        {" "}
        <b>300,000.00</b>{" "}
      </p>
      <AiOutlineMinusCircle />
      <p>01</p> <AiOutlinePlusCircle />
    </div>
  );
}

export default Cart