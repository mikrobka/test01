import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

import { instance, postsAPI } from "@/app/api"

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
      const response = await instance.get<PostType>(`${postId}`)

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
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed"
      })
  },
})

export const postsReducer = postsSlice.reducer
