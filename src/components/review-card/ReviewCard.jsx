import React from "react";

import ProfileCard from "../profile-card/profileCard";
import StarRating from "../star-rating/StarRating";
import Text from "../text/Text";

import styles from "./review-card.module.css";

export default function ReviewCard({
  reviewer,
  comment,
  rating,
  product,
  publishedAt,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.product}>
          <img src={product.image} className={styles.productImage} />
          <div className={styles.productInfo}>
            <h3>{product.name}</h3>
            <span>{product.description}</span>
          </div>
        </div>

        <div className={styles.info}>
          <StarRating value={rating} sm />
          <span>{publishedAt}</span>
        </div>

        <Text content={comment} limit={100} contentLink="#" />
      </div>
      <div className={styles.reviewer}>
        <ProfileCard
          picture={reviewer.image}
          name={reviewer.name}
          status={reviewer.status}
          centered
        />
      </div>
    </div>
  );
}
