import React from "react";

import styles from "./text.module.css";

export default function Text({ content, limit, contentLink }) {
  return content.length > limit ? (
    <p className={styles.text}>
      {content.slice(0, limit)}...{" "}
      <a className={styles.link} href={contentLink}>
        Read More
      </a>
    </p>
  ) : (
    <p className={style.text}>{content}</p>
  );
}
