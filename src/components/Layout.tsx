import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <h1>My Notes</h1>
        <button>Logout</button>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
