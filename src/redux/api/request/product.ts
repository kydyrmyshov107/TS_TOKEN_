import { api as index } from "..";
import { Todo } from "./typed";

const product = index.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<Todo.GetProductResponse, Todo.GetProductRequest>({
      query: () => ({
        url: "products",
      }),
      providesTags: ["user"],
    }),
    postProduct: builder.mutation<
      Todo.PostProductResponse,
      Todo.PostProductRequest
    >({
      query: (newProducts) => ({
        url: "products",
        method: "POST",
        body: newProducts,
      }),
      invalidatesTags: ["user"],
    }),
    deleteProduct: builder.mutation({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetProductQuery,
  usePostProductMutation,
  useDeleteProductMutation,
} = product;
