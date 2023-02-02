import React from "react";
import { NavLink } from "react-router-dom";

const SiteHeader = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}>home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>about</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>products</NavLink>
        </li>
      </ul>
    </>
  );
};

export default SiteHeader;
