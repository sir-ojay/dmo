
import React, { useState } from "react";
import logo from '../../assets/logo.png'
import {
  NavContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  FaIcon,
  NavLinks,
  SignupContainer,
  LoginContainer,
} from "./NavbarStyles";
import { BsCart2 } from "react-icons/bs";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer className="nav__wrapper">
      <NavLinks
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="logo__warapper"
      >
        {" "}
        <img src={logo} alt="" className="nav__logo" />
      </NavLinks>
      <MobileIcon onClick={toggle}>
        <FaIcon />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="/desktop-two" spy={true} smooth={true} duration={500}>
            {" "}
            Bond Offer
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/" spy={true} smooth={true} duration={500}>
            {" "}
            DMO{" "}
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/" spy={true} smooth={true} duration={500}>
            {" "}
            Features{" "}
          </NavLinks>
        </NavItem>

        <LoginContainer>
          <NavItem>
            <NavLinks
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="login__font"
            >
              {" "}
              Login{" "}
            </NavLinks>
          </NavItem>
        </LoginContainer>

        <SignupContainer>
          <NavItem>
            <NavLinks
              to="/sign-up"
              spy={true}
              smooth={true}
              duration={500}
              className="signup__font"
            >
              {" "}
              Sign Up{" "}
            </NavLinks>
          </NavItem>
        </SignupContainer>

        <NavItem>
          <NavLinks to="/" spy={true} smooth={true} duration={500}>
            {" "}
            <BsCart2 className="icon" />{" "}
          </NavLinks>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar