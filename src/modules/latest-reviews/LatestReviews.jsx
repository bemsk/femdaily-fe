import React from "react";
import { useSelector } from "react-redux";

import LatestReviewsList from "../../components/latest-reviews-list/LatestReviewsList";

export default function LatestReviews() {
  const { entities, status, error } = useSelector(
    (state) => state.latestReviews
  );

  return (
    <>
      <LatestReviewsList reviews={entities} />
    </>
  );
}
