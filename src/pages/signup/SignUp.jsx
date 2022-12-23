import React from 'react';
import './signup.scss'
import Header from '../../components/header/Header';

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="form__container">
        <div className="bg_right">
          <div className="form__wrapper">
            <div className="form__heading">
              <p className="heading">Signup</p>
              <p>Stop spending, Start Investing</p>

              <form action="" method="post">
                <div className="input_wrapper">
                  <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="first-name">First Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      id="input"
                    />
                  </div>
                </div>
                <div className="input_wrapper">
                  <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="first-name">First Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      id="input"
                    />
                  </div>
                </div>
                <div className="input_wrapper">
                  <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="first-name">First Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      id="input"
                    />
                  </div>
                </div>
                <div className="input_wrapper">
                  <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="first-name">First Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      id="input"
                    />
                  </div>
                </div>
                <div className="input_wrapper">
                  <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="first-name">First Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      id="input"
                    />
                  </div>
                </div>

                <div className="checkbox" style={{ marginTop: "1em" }}>
                  <input type="checkbox" name="" id="checkbox" />
                  <span>
                    By continuing, you agree to the <b> Terms and conditions</b>{" "}
                  </span>
                </div>

                <div className="button">Sign Up</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp
