import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import styles from './Layout.module.scss'

const Layout: React.FC = () => {
  const authReceipt = sessionStorage.getItem("AUTH_RECEIPT");
  const dispatch = useDispatch();
  if (authReceipt) {
    dispatch(setCredentials(authReceipt));
  }
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
