import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by{" "}
        <a
          className={styles.link}
          href="https://github.com/AleksandraBakhcheva"
          target="_blank"
        >
          Bakhcheva Aleksandra
        </a>
      </p>
      <span>&#169; {new Date().getFullYear()}</span>
    </footer>
  );
};
