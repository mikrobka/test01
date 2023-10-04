import { ChangeEvent, useEffect, useState } from "react"

import s from "./app.module.scss"

import { useAppDispatch, useAppSelector, useDebounce } from "@/app/hooks"
import { Loader } from "@/components/ui/loader"
import { TextField } from "@/components/ui/text-field"
import { Typography } from "@/components/ui/typography"
import { PostsList } from "@/features/posts"
import { fetchFilteredPosts, fetchPosts } from "@/features/posts/posts-slice"

function App() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts.posts)
  const postsStatus = useAppSelector((state) => state.posts.status)
  const [searchQuery, setSearchQuery] = useState("")
  const debounceValue = useDebounce(searchQuery, 1000)

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchFilteredPosts(debounceValue))
    }
  }, [debounceValue, dispatch])

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className={s.content}>
      {postsStatus === "loading" ? (
        <Loader />
      ) : (
        <>
          <div className={s.title}>
            <Typography variant={"h1"}> Блог</Typography>
            <Typography variant={"body1"}>
              {" "}
              Здесь мы делимся интересными кейсами из наших проектов, пишем про
              IT, а также переводим зарубежные статьи
            </Typography>
          </div>
          <TextField
            value={searchQuery}
            onChange={onSearchChange}
            placeholder={"Поиск по названию статьи"}
            className={s.textField}
            type={"search"}
          />

          <PostsList posts={posts} />
        </>
      )}
    </div>
  )
}

export default App
