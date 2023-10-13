import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

import { postsAPI } from "@/app/api"

export type PostType = {
  body: string
  id: number
  title: string
  userId: number
}

interface PostsState {
  posts: PostType[]
  currentPost: PostType | null
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: PostsState = {
  posts: [],
  currentPost: null,
  status: "idle",
  error: null,
}

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (searchQuery: string = "") => {
    try {
      const response = await postsAPI.posts(searchQuery)

      return response.data
    } catch (error) {
      throw new Error("Failed to fetch posts")
    }
  },
)

export const fetchPostById = createAsyncThunk(
  "posts/fetchPost",
  async (postId: number) => {
    try {
      const response = await postsAPI.getPostById(postId)

      return response.data
    } catch (error) {
      throw new Error("Failed to fetch post by ID")
    }
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
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(fetchPostById.pending.type, (state) => {
        state.status = "loading"
      })
      .addCase(
        fetchPostById.fulfilled.type,
        (state, action: PayloadAction<PostType>) => {
          state.status = "succeeded"
          state.currentPost = action.payload
        },
      )
  },
})

export const postsReducer = postsSlice.reducer
