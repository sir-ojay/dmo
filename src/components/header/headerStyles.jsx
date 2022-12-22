import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";




export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  // padding: 0px 10px 0px 0px;
  position: sticky;
  background: #cffada;
  top: 0;
  @media screen and (max-width: 768px) {
    padding: 1em;
    height: 60px;
  }
`;

export const FaIcon = styled(FaBars)`
  color: #00000f;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 1em;
    font-size: 1.8em;
    cursor: pointer;
    color: #00000f;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 3em;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  // font-family: Lato;
  a {
    text-decoration: none;
    color: #434343;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }
  @media screen and (max-width: 1024px) {
    a {
      font-size: 12px;
      line-height: 25px;
    }
  } ;
`;

export const NavLinks = styled(LinkR)`
  height: 25px;
  text-decoration: none;
  padding: 0 1.5em;
  align-items: center;
  color: #505050;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #00000f;
    transition: 0.4s ease-in-out;
  }
`;




// `````````Sidebar Elements````````
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #333;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.8s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.6em;
  right: 1.4em;
  background: transparent;
  font-size: 2em;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100px);
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(4, 80px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #00000f;
    transition: 0.2s ease-in-out;
  }
`;
