import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./navbar.styles";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">As de Pizz</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
