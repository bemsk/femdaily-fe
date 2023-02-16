import React, { useMemo, useState } from "react";

import ReviewCard from "../review-card/ReviewCard";
import Icon from "../icon/Icon";

import styles from "./latest-reviews-list.module.css";

const REVIEW_PER_PAGE = 2;

export default function LatestReviewsList({ reviews }) {
  const [page, setPage] = useState(0);

  const totalPage = useMemo(() => {
    const lastItemCount = reviews.length % REVIEW_PER_PAGE;

    return (
      (lastItemCount > 0 ? 1 : 0) +
      (reviews.length - lastItemCount) / REVIEW_PER_PAGE
    );
  }, [reviews]);

  const displayedReviews = useMemo(() => {
    return reviews.slice(
      page * REVIEW_PER_PAGE,
      page * REVIEW_PER_PAGE + REVIEW_PER_PAGE
    );
  }, [page, reviews]);

  const handleNextClicked = () => {
    if (page === totalPage - 1) return;
    setPage((page) => page + 1);
  };

  const handlePrevClicked = () => {
    if (page === 0) return;
    setPage((page) => page - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        {displayedReviews.map(
          ({ id, reviewer, comment, rating, product, publishedAt }) => (
            <ReviewCard
              key={id}
              reviewer={reviewer}
              comment={comment}
              rating={rating}
              product={product}
              publishedAt={publishedAt}
            />
          )
        )}
      </div>
      <div className={styles.control}>
        <button
          onClick={handlePrevClicked}
          className={styles.controlButton}
          disabled={page === 0}
        >
          <Icon
            type="chevron-left"
            color={page === 0 ? "#f4bec9" : "#db284e"}
          />
        </button>
        <div className={styles.indicators}>
          {[...Array(totalPage).keys()].map((n) => (
            <span
              key={n}
              className={`${styles.indicator} ${
                page === n && styles.activeIndicator
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNextClicked}
          className={styles.controlButton}
          disabled={page === totalPage - 1}
        >
          <Icon
            type="chevron-right"
            color={page === totalPage - 1 ? "#f4bec9" : "#db284e"}
          />
        </button>
      </div>
    </div>
  );
}
