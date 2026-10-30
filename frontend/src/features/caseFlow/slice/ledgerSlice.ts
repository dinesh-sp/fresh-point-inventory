import { apiSlice } from "../../../api/apiSlice";
import { ledger, ledgershema } from "../schema";

const ledgersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addledger: builder.mutation<ledger, ledger>({
      query: (body) => ({
        url: "/ledger",
        method: "POST",
        body,
      }),
      transformResponse: (response: unknown) => ledgershema.parse(response),
      invalidatesTags: [{ type: "ledger", id: "LIST" }],
    }),
  }),
});

export const { useAddledgerMutation } = ledgersApiSlice;
