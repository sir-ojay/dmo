import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu

} from "./NavbarStyles";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            Bond Offer
          </SidebarLink>
          <SidebarLink to="/project" onClick={toggle}>
            DMO{" "}
          </SidebarLink>
          <SidebarLink to="/project" onClick={toggle}>
            Features{" "}
          </SidebarLink>
          <SidebarLink to="/project" onClick={toggle}>
            Login{" "}
          </SidebarLink>
          <SidebarLink to="/project" onClick={toggle}>
            Sign Up{" "}
          </SidebarLink>

        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar