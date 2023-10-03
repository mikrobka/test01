import s from "./post.module.scss"

import { LargePhoto, Photo } from "@/assets"
import { Like } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
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
      {fullWidth ? (
        <LargePhoto className={s.photo} />
      ) : (
        <Photo className={s.photo} />
      )}

      <div className={s.content}>
        <div className={s.title}>
          <Typography variant={"h2"}>{post.title}</Typography>
          <div className={s.likes}>
            <div className={s.like}>
              <Button variant={"like"}>
                <Like variant={"like"} />
              </Button>
              <Typography variant={"body2"}>252</Typography>
            </div>
            <div className={s.like}>
              <Button variant={"like"}>
                <Like variant={"like"} />
              </Button>
              <Typography variant={"body2"}>5</Typography>
            </div>
          </div>
        </div>
        <div className={s.body}>
          <Typography variant={"body1"}>{post.body}</Typography>
        </div>
        <div className={s.button}>
          <Button>Читать далее</Button>
        </div>
      </div>
    </div>
  )
}
