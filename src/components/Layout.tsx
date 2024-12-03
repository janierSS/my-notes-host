import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";

const Layout: React.FC = () => {
  const authReceipt = sessionStorage.getItem("AUTH_RECEIPT");
  const dispatch = useDispatch();
  if (authReceipt) {
    dispatch(setCredentials(authReceipt));
  }
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
