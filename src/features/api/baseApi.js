// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: () => ({}), // Empty now, inject endpoints later
});
