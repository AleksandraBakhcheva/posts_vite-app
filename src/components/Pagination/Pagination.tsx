import styles from "./Pagination.module.css";
import { PaginationProps } from "../../utils/types.js";
import { Link } from "react-router-dom";

export const Pagination = (props: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <ul className={styles.pages}>
        {pageNumbers.map((number: number) => (
          <Link to="/" onClick={() => props.paginate(number)}>
            <li
              //className={styles.page}
              className={
                number === props.currentPage
                  ? styles.activePageNumber
                  : styles.page
              }
              key={number}
            >
              {number}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
