import styles from "./Posts.module.css";
import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import store from "../../store/PostsStore.js";
import { Post } from "../Post/Post.js";
import { IPost } from "../../utils/Interfaces.js";
import { Pagination } from "../Pagination/Pagination.js";

export const Posts = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    store.getPosts();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = store.posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={styles.container}>
        {currentPost.map((post: IPost) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={store.posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
});
