import React from "react";
import { logout } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from './Header.module.scss'
import { selectAuthReceipt } from "../store/selectors";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const authReceipt = useSelector(selectAuthReceipt);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.container}>
      <h1>My Notes</h1>
      <button className={!authReceipt ? styles.hide : undefined} onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
