import styles from "./PostDetailsPage.module.css";
import { useParams } from "react-router-dom";
import store from "../../store/PostsStore.js";
import { IPost } from "../../utils/Interfaces.js";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PostDetailsPage = () => {
  const { id } = useParams();

  let post: IPost = {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  };

  if (store.posts) {
    post = store.posts.find((item: { id: string }) => item.id == id)!;
  }

  return (
    <>
      <main className={styles.post}>
        <div className={styles.post_box}>
          <h3>Post Id: {post.id}</h3>
          <h2 className={styles.header}>Post Title: "{post.title}"</h2>
          <p>Extract: "{post.body}..."</p>
          <Link to="/">
            <motion.button
              className="details-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            >
              Homepage
            </motion.button>
          </Link>
        </div>
      </main>
    </>
  );
};
