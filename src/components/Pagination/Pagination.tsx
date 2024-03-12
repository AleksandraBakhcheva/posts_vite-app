import styles from "./Pagination.module.css";
import { PaginationProps } from "../../utils/Types.js";
import { Link } from "react-router-dom";

export const Pagination = (props: PaginationProps) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <ul className={styles.pages}>
        {pageNumbers.map((number: number) => (
          <Link to="/" onClick={() => props.paginate(number)} key={number}>
            <li
              className={
                number === props.currentPage
                  ? styles.activePageNumber
                  : styles.page
              }
            >
              {number}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
