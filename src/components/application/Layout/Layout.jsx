import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
