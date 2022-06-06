import React from "react";
import { Outlet } from "react-router-dom";

//------------------
// React Component
//------------------
const Navigation = () => {
  return (
    <React.Fragment>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

//--------------
// Default Export
//--------------
export default Navigation;
