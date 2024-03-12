import styles from "./Posts.module.css";
import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import store from "../../store/PostsStore.js";
import { Post } from "../Post/Post.js";
import { IPost } from "../../utils/Interfaces.js";
import arrow_back from "../../assets/images/arrow_back.svg";
import arrow_next from "../../assets/images/arrow_next.svg";
import { Pagination } from "../Pagination/Pagination.js";

export const Posts = observer(() => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    store.getPosts();
  }, []);

  const lastPostIndex: number = currentPage * postsPerPage;
  const firstPostIndex: number = lastPostIndex - postsPerPage;
  const currentPost: never[] = store.posts.slice(firstPostIndex, lastPostIndex);
  const numOfPages: number = Math.ceil(store.posts.length / postsPerPage);

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = (): void => {
    if (currentPage === numOfPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = (): void => {
    if (currentPage === 1) {
      setCurrentPage(numOfPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {currentPost.map((post: IPost) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button className={styles.button} onClick={handlePreviousPage}>
          <img src={arrow_back} alt="arrow-back" />
        </button>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={store.posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <button className={styles.button} onClick={handleNextPage}>
          <img src={arrow_next} alt="arrow-next" />
        </button>
      </div>
    </>
  );
});
