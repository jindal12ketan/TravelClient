import { api } from "api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = extendedApi;
