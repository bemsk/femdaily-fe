import React from "react";

import StarRating from "../star-rating/StarRating";

import styles from "./product-card.module.css";

export default function ProductCard({ name, rating, description, image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <StarRating value={rating} />
      <h3 className={styles.productTitle}>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
