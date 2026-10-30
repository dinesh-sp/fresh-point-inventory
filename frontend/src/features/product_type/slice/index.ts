import { apiSlice } from "../../../api";
import { productType, productTypeListSchema } from "../schema";

export const productTypeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getproductType: builder.query<productType[], void>({
      query: () => "/productType",
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) =>
        productTypeListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [
              ...result.map((productType) => ({
                type: "productType" as const,
                id: productType.id,
              })),
              { type: "productType", id: "LIST" },
            ]
          : [{ type: "productType", id: "LIST" }],
    }),
  }),
});

export const { useGetproductTypeQuery } = productTypeApiSlice;
