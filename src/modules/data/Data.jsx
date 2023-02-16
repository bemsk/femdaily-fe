import React, { Children, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAsyncData } from "./data.slice";

export default function Data({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAsyncData({}, { signal: controller.signal }));

    return () => {
      controller.abort();
    };
  }, []);

  return children;
}
