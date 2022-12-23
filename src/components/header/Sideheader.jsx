import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./NavbarStyles";

const Sideheader = () => {
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
          <SidebarLink to="/desktop-one" onClick={toggle}>
            Bond Offer
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Portfolio{" "}
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Notification{" "}
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sideheader;
