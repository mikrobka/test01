import s from "./vote-item.module.scss"

import { Like } from "@/assets"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { LikeType } from "@/components/vote"

type Props = {
  like: LikeType
  handleLike: () => void
  variant: "like" | "dislike"
}

export const VoteItem = ({ variant, like, handleLike }: Props) => {
  return (
    <div className={s.like}>
      <Button onClick={() => handleLike()} variant={"vote"}>
        <Like active={like.active} variant={variant} />
      </Button>
      <Typography variant={"body2"}>{like.count}</Typography>
    </div>
  )
}
