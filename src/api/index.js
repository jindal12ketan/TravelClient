import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Constants from "Constants";
import { get } from "utils/lodash";
import { CACHE_TAG_TYPES } from "./cacheTagTypes";

const { SERVER_URL } = Constants;

export const DEFAULT_CACHE_SUBSCRIPTION_DURATION = 0;

export const api = createApi({
  reducerPath: "apiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    // how many seconds the data will be cached between requests
    keepUnusedDataFor: DEFAULT_CACHE_SUBSCRIPTION_DURATION,
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      const token =
        get(sessionStorage, "token") || get(state, "LoginSlice.loginToken");
      headers.set("X-Content-Type-Options", "nosniff");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: CACHE_TAG_TYPES,
  endpoints: () => ({}),
});
export default api;
