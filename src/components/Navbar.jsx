import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="./content/Athene2004" activeStyle>
            Athene2004
          </NavLink>
          <NavLink to="./content/Beijing2008" activeStyle>
            Beijing2008
          </NavLink>
          <NavLink to="/content" activeStyle>
            Content
          </NavLink>
          <NavLink to="/content" activeStyle>
            Content
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
