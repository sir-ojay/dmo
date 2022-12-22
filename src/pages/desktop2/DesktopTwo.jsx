import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import coatofarm from "../../assets/Coat-of-Arms-of-Nigeria.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; 
import './desktoptwo.scss'

const DesktopTwo = () => {
   const desktopDetails = [
     {
       id: 1,
       logo: coatofarm,
       bond: "FGN Savings Bond",
       days: "730 days Savings Bond",
       dueDate: "Due October 12, 2024",
       type: "Minimum",
       amount: "#5,000",
       rate: "% Per Year",
       percentage: "11.382%",
       interest: "Interest Payment",
       duration: "Quaterly",
       savingsInfo: "Opening",
       openingDate: "Oct/04/2022",
       period: "Closing Date",
       closingDate: "Oct/07/2022",
       state: "settlement",
       settlingDate: "Oct/12/2022",
       request: "Add to cart",
     },
     {
       id: 2,
       logo: coatofarm,
       bond: "FGN Savings Bond",
       days: "730 days Savings Bond",
       dueDate: "Due October 12, 2024",
       type: "Minimum",
       amount: "#5,000",
       rate: "% Per Year",
       percentage: "11.382%",
       interest: "Interest Payment",
       duration: "Quaterly",
       savingsInfo: "Opening",
       openingDate: "Oct/04/2022",
       period: "Closing Date",
       closingDate: "Oct/07/2022",
       state: "settlement",
       settlingDate: "Oct/12/2022",
       request: "Add to cart",
     },
     {
       id: 3,
       logo: coatofarm,
       bond: "FGN Savings Bond",
       days: "730 days Savings Bond",
       dueDate: "Due October 12, 2024",
       type: "Minimum",
       amount: "#5,000",
       rate: "% Per Year",
       percentage: "11.382%",
       interest: "Interest Payment",
       duration: "Quaterly",
       savingsInfo: "Opening",
       openingDate: "Oct/04/2022",
       period: "Closing Date",
       closingDate: "Oct/07/2022",
       state: "settlement",
       settlingDate: "Oct/12/2022",
       request: "Add to cart",
     },
    
   ];
  return (
    <>
      <Navbar />
      <div className="desktop__body">
        <div className="desktop__wrapper">
          {desktopDetails.map((desktopDetail) => (
            <div className="desktop__container" key={desktopDetail.id}>
              <div className="flex__between">
                <div className="logo__wrapper">
                  <img src={desktopDetail.logo} alt="" />
                </div>
                <div className="bond__wrapper">
                  <p>{desktopDetail.bond}</p>
                </div>
              </div>

              <div className="text_weight_container">
                <p className="text_weight">{desktopDetail.days}</p>
                <p className="text_faint">{desktopDetail.dueDate}</p>
              </div>

              <div className="flex__between">
                <p className="text_faint">{desktopDetail.type}</p>
                <p className="text_bold">{desktopDetail.amount}</p>
              </div>
              <div className="flex__between">
                <p className="text_faint">{desktopDetail.rate}</p>
                <p className="text_bold">{desktopDetail.percentage}</p>
              </div>
              <div className="flex__between">
                <p className="text_faint">{desktopDetail.interest}</p>
                <p className="text_bold">{desktopDetail.duration}</p>
              </div>
              <div className="flex__between">
                <p className="text_faint">{desktopDetail.savingsInfo}</p>
                <p className="text_bold">{desktopDetail.openingDate}</p>
              </div>
              <div className="flex__between">
                <p className="text_faint">{desktopDetail.period}</p>
                <p className="text_bold">{desktopDetail.closingDate}</p>
              </div>
              <div className="flex__between">
                <p className="text_faint">{desktopDetail.state}</p>
                <p className="text_bold">{desktopDetail.settlingDate}</p>
              </div>
              <div className="button__wrapper">
                <div className="button">
                  <p>{desktopDetail.request}</p>
                </div>
                < FavoriteBorderIcon className="icon"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DesktopTwo