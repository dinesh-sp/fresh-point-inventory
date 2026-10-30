import { apiSlice } from "../../../api";
import { product, productListSchema } from "../schema";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getproduct: builder.query<product[], void>({
      query: () => "/product",
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) =>
        productListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [
              ...result.map((product) => ({
                type: "product" as const,
                id: product.id,
              })),
              { type: "product", id: "LIST" },
            ]
          : [{ type: "product", id: "LIST" }],
    }),
  }),
});

export const { useGetproductQuery } = productApiSlice;
