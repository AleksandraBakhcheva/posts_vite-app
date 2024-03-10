import styles from "./Post.module.css";
import { IPostProps } from "../../utils/Interfaces.js";
import { Link } from "react-router-dom";

export const Post = ({ post }: IPostProps) => {
  return (
    <div className={styles.post}>
      <Link to={`post/${post.id}`}>
        <h3 className={styles.header}>Post Title: "{post.title}"</h3>
        <p>Extract: "{post.body}..."</p>
      </Link>
    </div>
  );
};
