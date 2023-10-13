import { useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import s from "./post-page.module.scss"

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { RouteNames } from "@/app/routes"
import { ArrowBack } from "@/assets"
import { Button } from "@/components/ui/button"
import { Loader } from "@/components/ui/loader"
import { Typography } from "@/components/ui/typography"
import { Vote } from "@/components/vote"
import { fetchPostById } from "@/features/pages/posts-list/posts/posts-slice"

export const PostPage = () => {
  let { id } = useParams()
  const post = useAppSelector((state) => state.posts.currentPost)
  const postsStatus = useAppSelector((state) => state.posts.status)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPostById(Number(id)))
  }, [id, dispatch])

  if (postsStatus === "loading") {
    return <Loader />
  }

  if (!post) {
    return <div className={s.error}>Пост не найден!</div>
  }

  const onHandleClick = () => {
    navigate(RouteNames.START_PAGE)
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
