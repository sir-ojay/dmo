
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {
  NavContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  FaIcon,
  NavLinks
} from "./headerStyles";
import "./header.scss";
import { BsCart2 } from "react-icons/bs" ;
import { FiUser } from "react-icons/fi";

const Header = () => {
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
          <NavLinks to="/desktop-one" spy={true} smooth={true} duration={500}>
            {" "}
            Bond Offer
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="text_faint"
          >
            {" "}
            Portfolio{" "}
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="text_faint"
          >
            {" "}
            Notification{" "}
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/" spy={true} smooth={true} duration={500}>
            {" "}
            <FiUser className="icon" />{" "}
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/cart" spy={true} smooth={true} duration={500}>
            {" "}
            <BsCart2 className="icon" />{" "}
          </NavLinks>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Header