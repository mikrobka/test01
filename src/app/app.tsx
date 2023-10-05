import { ChangeEvent, useCallback, useEffect, useState } from "react"

import s from "./app.module.scss"

import { useAppDispatch, useAppSelector, useDebounce } from "@/app/hooks"
import { Header } from "@/components/header"
import { Loader } from "@/components/ui/loader"
import { PostsList } from "@/features/pages/posts-list/posts"
import {
  fetchFilteredPosts,
  fetchPosts,
} from "@/features/pages/posts-list/posts/posts-slice"

function App() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts.posts)
  const postsStatus = useAppSelector((state) => state.posts.status)
  const [searchQuery, setSearchQuery] = useState("")
  const debounceValue = useDebounce(searchQuery, 1000)

  useEffect(() => {
    if (debounceValue === "") {
      dispatch(fetchPosts())
    } else {
      dispatch(fetchFilteredPosts(debounceValue))
    }
  }, [debounceValue, dispatch])

  const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  return (
    <div className={s.content}>
      <Header searchQuery={searchQuery} onSearchChange={onSearchChange} />
      {postsStatus === "loading" ? (
        <Loader />
      ) : (
        <>
          {postsStatus === "succeeded" && posts.length === 0 ? (
            <div>По вашему запросу ничего не найдено</div>
          ) : (
            <PostsList posts={posts} />
          )}
        </>
      )}
    </div>
  )
}

export default App
