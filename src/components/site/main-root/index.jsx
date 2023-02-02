import React from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "../../../layouts/site/header";

const MainRoot = () => {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
};

export default MainRoot;
