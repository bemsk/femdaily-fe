import React from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";

import LatestReviews from "./modules/latest-reviews/LatestReviews";
import EditorsChoice from "./modules/editors-choice/EditorsChoice";
import LatestArticles from "./modules/latest-articles/LatestArticles";
import Data from "./modules/data/Data";

const root = createRoot(document.getElementById("root"));

const editorsChoiceContent = document
  .getElementById("editors-choice")
  .querySelector(".content");

const latestReviewsContent = document
  .getElementById("latest-reviews")
  .querySelector(".content");

const latestArticlesContent = document
  .getElementById("latest-articles")
  .querySelector(".content");

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Data>
        {createPortal(<EditorsChoice />, editorsChoiceContent)}
        {createPortal(<LatestReviews />, latestReviewsContent)}
        {createPortal(<LatestArticles />, latestArticlesContent)}
      </Data>
    </Provider>
  </React.StrictMode>
);
