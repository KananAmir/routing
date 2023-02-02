import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../../layouts/admin/header";

const AdminRoot = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminRoot;
