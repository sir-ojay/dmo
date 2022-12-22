import React from "react";
import coatofarm from "../../assets/Coat-of-Arms-of-Nigeria.svg";
import Header from "../../components/header/Header";

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
    <div>
      <Header />
      {savingsDetails.map((savingsdetail) => (
        <div>
          <div>
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <img src={savingsdetail.logo} alt="" />
            </div>
            <h3>{savingsdetail.days}</h3>
            <div>
              <p>{savingsdetail.type}</p>
              <p>{savingsdetail.value}</p>
            </div>
          </div>

          <div>
            <p>{savingsdetail.currency}</p>
            <div>
              <p>
                {" "}
                <b>300,000.00</b>{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carts;
