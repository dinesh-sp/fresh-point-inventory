import { apiSlice } from "../../../api";
import { material, materialListSchema } from "../schema";

const materialApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getmaterial: builder.query<material[], void>({
      query: () => "/material",
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) =>
        materialListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [
              ...result.map((material) => ({
                type: "material" as const,
                id: material.id,
              })),
              { type: "material", id: "LIST" },
            ]
          : [{ type: "material", id: "LIST" }],
    }),
  }),
});

export const { useGetmaterialQuery } = materialApiSlice;
