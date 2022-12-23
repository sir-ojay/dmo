import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu

} from "./NavbarStyles";
import { useState } from "react";

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
     setIsOpen(!isOpen);
   };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Bond Offer
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            DMO{" "}
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Features{" "}
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Login{" "}
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Sign Up{" "}
          </SidebarLink>

        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar