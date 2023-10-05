import { useNavigate, useParams } from "react-router-dom"

import s from "./post-page.module.scss"

import { useAppSelector } from "@/app/hooks"
import { ArrowBack } from "@/assets"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Vote } from "@/components/vote"

export const PostPage = () => {
  const { id } = useParams()
  const posts = useAppSelector((state) => state.posts.posts)
  const navigate = useNavigate()
  let post

  if (typeof id === "string") {
    post = posts.find((p) => p.id === parseInt(id, 10))
  }

  if (!post) {
    return <div className={s.error}>Пост не найден!</div>
  }

  const onHandleClick = () => {
    navigate("/")
  }

  return (
    <div className={s.content}>
      <div className={s.header}>
        <Button onClick={onHandleClick} className={s.button}>
          <ArrowBack />
          <Typography>Вернуться к статьям</Typography>
        </Button>
        <Vote />
      </div>
      <div className={s.title}>
        <Typography variant={"h2"}>{post.title}</Typography>
      </div>
      <img className={s.photo} src="https://placehold.co/1920x1080" alt="" />
      <div className={s.body}>
        <Typography>{post.body}</Typography>
      </div>
    </div>
  )
}
