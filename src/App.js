import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ASTRA THEME
import "./css/astra_theme.scss";

import Layout from "./layout/layout";
import LoginPage from "./pages/login/login";
import DronePage from "./pages/drone/drone";
import Register from "./pages/drone/register";
import Request from "./pages/flightsimulation/request";
import Approved from "./pages/flightsimulation/approved";
import Permission from "./pages/drone/permission";
import Dashboard from "./pages/dashboard/dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Layout />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/drone" element={<Layout />}>
          <Route index element={<DronePage />} />
        </Route>
        <Route path="/register" element={<Layout />}>
          <Route index element={<Register />} />
        </Route>
        <Route path="/request" element={<Layout />}>
          <Route index element={<Request />} />
        </Route>
        <Route path="/approved" element={<Layout />}>
          <Route index element={<Approved />} />
        </Route>
        <Route path="/permission" element={<Layout />}>
          <Route index element={<Permission />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
