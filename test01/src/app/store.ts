import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import { postsReducer } from "@/features/pages/posts-list/posts/posts-slice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
//@ts-ignore
window.store = store
