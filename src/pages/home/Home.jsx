import React from 'react';
import home from '../../assets/home.png';
import {FiArrowRight} from 'react-icons/fi';
import { AiOutlinePlayCircle } from "react-icons/ai";
import './home.scss'
import Navbar from '../../components/navbar/Navbar';


const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="home__wrapper">
        <div className="home__container">
          <h1>Subscribe to FGN Saving Bond</h1>
          <p>Loan and get paid with interest</p>

          <div className="home__mini_wrapper">
            <div className="button">
              <p>
                Get Started <FiArrowRight className="icon" />{" "}
              </p>
            </div>

            <div className="video__container">
              <p>
                {" "}
                <AiOutlinePlayCircle /> See Video
              </p>
            </div>
          </div>
        </div>

        <div className="image__container">
          <img src={home} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home