import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export type PostType = {
  body: string
  id: number
  title: string
  userId: number
}

interface PostsState {
  posts: PostType[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: null as null | string,
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")

  return (await response.json()) as PostType[]
})

export const fetchFilteredPosts = createAsyncThunk(
  "posts/fetchFilteredPosts",
  async (searchQuery: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${searchQuery}`,
    )

    return (await response.json()) as PostType[]
  },
)

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<PostType[]>) => {
          state.status = "succeeded"
          state.posts = action.payload
        },
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed"
      })
      .addCase(fetchFilteredPosts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(
        fetchFilteredPosts.fulfilled,
        (state, action: PayloadAction<PostType[]>) => {
          state.status = "succeeded"
          state.posts = action.payload
        },
      )
      .addCase(fetchFilteredPosts.rejected, (state, action) => {
        state.status = "failed"
      })
  },
})

export const postsReducer = postsSlice.reducer