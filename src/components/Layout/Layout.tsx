import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
