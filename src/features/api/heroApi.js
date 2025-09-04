// src/features/api/heroApi.js
import { baseApi } from "./baseApi";

export const heroApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHero: builder.query({
      query: () => "hero",
    }),
    updateHero: builder.mutation({
      query: (data) => ({
        url: "hero",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetHeroQuery, useUpdateHeroMutation } = heroApi;
