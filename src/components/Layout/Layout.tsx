import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};
