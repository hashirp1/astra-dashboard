import React from "react";

import "./_layout.scss";

import { Outlet } from "react-router-dom";
import LoginPage from "../pages/login/login";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
