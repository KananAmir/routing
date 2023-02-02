import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/admin"}>dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/users"}>users list</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/products"}>products lists</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Go to Site</NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdminHeader;
