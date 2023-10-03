import { useEffect, useState } from "react"

import s from "./app.module.scss"

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Like } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"
import { Typography } from "@/components/ui/typography"
import { PostsList } from "@/features/posts"
import { fetchPosts } from "@/features/posts/posts-slice"

function App() {
  const [like, setLike] = useState("like")
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts.posts)
  const postsStatus = useAppSelector((state) => state.posts.status)

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  console.log(posts)

  const click = () => {
    setLike("like")
  }

  return (
    <div className={s.content}>
      <div className={s.title}>
        <Typography variant={"h1"}> Блог</Typography>
        <Typography variant={"body1"}>
          {" "}
          Здесь мы делимся интересными кейсами из наших проектов, пишем про IT,
          а также переводим зарубежные статьи
        </Typography>
      </div>
      <TextField
        placeholder={"Поиск по названию статьи"}
        className={s.textField}
        type={"search"}
      />

      <PostsList posts={posts} />
    </div>
  )
}

export default App
