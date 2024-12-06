import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import styles from './Layout.module.scss'
import Footer from "./Footer";

const Layout: React.FC = () => {
  const authReceipt = sessionStorage.getItem("AUTH_RECEIPT");
  const dispatch = useDispatch();
  if (authReceipt) {
    dispatch(setCredentials(authReceipt));
  }
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles['container__main']}>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
