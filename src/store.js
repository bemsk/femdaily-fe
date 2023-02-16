import { configureStore } from "@reduxjs/toolkit";

import editorsChoiceReducer from "./modules/editors-choice/editors-choice.slice";
import latestReviewsReducer from "./modules/latest-reviews/latest-reviews.slice";
import latestArticlesReducer from "./modules/latest-articles/latest-articles.slice";

const store = configureStore({
  reducer: {
    editorsChoice: editorsChoiceReducer,
    latestReviews: latestReviewsReducer,
    latestArticles: latestArticlesReducer,
  },
});

export default store;
