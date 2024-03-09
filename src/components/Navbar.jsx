import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  
  return (
    <nav>
      <div>
          <NavLink to="/todonew">TodoNew</NavLink>

          <NavLink to="/tododetaild">TodoDetail</NavLink>

          <NavLink to="/todolist">TodoList</NavLink>
        </div>
    </nav>
  );
};
export default Navbar;
