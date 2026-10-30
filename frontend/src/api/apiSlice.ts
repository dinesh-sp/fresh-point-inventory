import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import tags from "./tags.json";
// Base API slice. Feature-specific endpoints (e.g. todos) are injected
// into this via `apiSlice.injectEndpoints` to keep things modular.
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api",
  }),
  tagTypes: tags,
  endpoints: () => ({}),
});
