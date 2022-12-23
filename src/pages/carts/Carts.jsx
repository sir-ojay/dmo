import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import coatofarm from "../../assets/Coat-of-Arms-of-Nigeria.svg";
import Header from "../../components/header/Header";
import "./cart.scss";

const Carts = () => {
  const savingsDetails = [
    {
      id: 1,
      logo: coatofarm,
      days: "730 days Savings Bond",
      type: "Automatic",
      value: "Delete",
      currency: "Value(#)",
    },
    {
      id: 2,
      logo: coatofarm,
      days: "730 days Savings Bond",
      type: "Automatic",
      value: "Delete",
      currency: "Value(#)",
    },
  ];
  return (
    <>
      <Header />
      <div className="cart_container">
        <div className="cart__wapper">
          {savingsDetails.map((savingsdetail) => (
            <div key={savingsdetail.id} className="cart__flex">
              <div className="cart__flex_start">
                <div className="checkbox__wrapper">
                  <input type="checkbox" className="checkbox" />
                </div>
                <div className="image_wrapper">
                  <img src={savingsdetail.logo} alt="" />
                </div>
                <h3>{savingsdetail.days}</h3>
                <div className="auto_wrapper">
                  <p className="text_green">{savingsdetail.type}</p>
                </div>

                <p className="text_red">{savingsdetail.value}</p>
              </div>

              <div>
                <p>{savingsdetail.currency}</p>
                <div>
                  <p>
                    {" "}
                    <b>300,000.00</b>{" "}
                  </p>
                  <AiOutlineMinusCircle />

                  <AiOutlinePlusCircle />
                </div>
              </div>
            </div>
          ))}

          <div className="fees__wrapper">
            <div className="fees__flex">
              <p> Fees + Taxes </p>
              <p> #2.09</p>
              <div>
                <p>Total Buy</p>
                <p>#600,000.00</p>
              </div>
            </div>

            <p>This is a 730 days Saving Bond, you have a fixed income</p>
          </div>

          <div className="checkout__wrapper">
            <div className="checkout">
              <p>Check Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
