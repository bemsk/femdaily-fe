import React from "react";

import LatestArticleCard from "../latest-article-card/LatestArticleCard";

import styles from "./latest-articles-list.module.css";

export default function LatestArticlesList({ articles }) {
  return (
    <div className={styles.container}>
      {articles.map(({ id, title, image, author, publishedAt }) => (
        <LatestArticleCard
          key={id}
          title={title}
          image={image}
          author={author}
          publishedAt={publishedAt}
        />
      ))}
    </div>
  );
}
