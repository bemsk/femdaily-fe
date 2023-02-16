import React from "react";
import { useSelector } from "react-redux";
import LatestArticlesList from "../../components/latest-articles-list/LatestArticlesList";

export default function LatestArticles() {
  const { entities, status, error } = useSelector(
    (state) => state.latestArticles
  );

  return (
    <>
      <LatestArticlesList articles={entities} />
    </>
  );
}
