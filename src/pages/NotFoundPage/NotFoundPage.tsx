import styles from "./NotFoundPage.module.css";
import error404 from "../../assets/images/error404.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2>Ooops!</h2>
      <h3>Error 404 - PAGE NOT FOUND</h3>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <img src={error404} alt="error-404" />
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
        >
          Homepage
        </motion.button>
      </Link>
    </div>
  );
};
