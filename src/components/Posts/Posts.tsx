import styles from "./Posts.module.css";
import { observer } from "mobx-react";
import { useEffect } from "react";
import store from "../../store/PostsStore.js";
import { Post } from "../Post/Post.js";
import { IPost } from "../../utils/Interfaces.js";
import { motion } from "framer-motion";

export const Posts = observer(() => {
  useEffect(() => {
    store.getPosts();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {store.posts.map((post: IPost) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <div>
        <motion.button
          className="notFound-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
        >
          Homepage
        </motion.button>
      </div>
    </>
  );
});
