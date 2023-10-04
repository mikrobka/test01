import s from "./post.module.scss"

import { LargePhoto, Photo } from "@/assets"
import { Like } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Vote } from "@/components/vote"
import { PostType } from "@/features/posts/posts-slice"

type Props = {
  post: PostType
  fullWidth: boolean
}

export const Post = ({ post, fullWidth = true }: Props) => {
  return (
    <div
      className={`${s.post} ${
        fullWidth ? s["full-width"] : s["not-full-with"]
      }`}
    >
      <img className={s.photo} src="https://placehold.co/1920x1080" alt="" />

      <div className={s.content}>
        <div className={s.title}>
          <Typography className={s.typography} variant={"h2"}>
            {post.title}
          </Typography>
          <Vote />
        </div>
        {fullWidth && (
          <div className={s.body}>
            <Typography variant={"body1"}>{post.body}</Typography>
          </div>
        )}
        <div className={s.button}>
          <Button>Читать далее</Button>
        </div>
      </div>
    </div>
  )
}
