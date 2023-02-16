import React from "react";

import styles from "./latest-article-card.module.css";

export default function LatestArticleCard({
  id,
  title,
  image,
  author,
  publishedAt,
}) {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div>
        <span className={styles.author}>{author}</span>
        <span className={styles.updatedAt}> | {publishedAt}</span>
      </div>
    </div>
  );
}
