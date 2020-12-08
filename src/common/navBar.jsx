import React from "react";
import { Nav, LinkWrapper } from "../commonStyles/navbar";
import { Heading, NavLink } from "../commonStyles/fonts";

const NavBar = () => {
  return (
    <Nav>
      <Heading>AI playground</Heading>
      <LinkWrapper>
        <NavLink>Learn All</NavLink>
        <NavLink>Docs</NavLink>
        <NavLink>Account</NavLink>
      </LinkWrapper>
    </Nav>
  );
};

export default NavBar;
