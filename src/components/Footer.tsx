import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles['container__line']}/>
    </footer>
  );
};

export default Footer;
