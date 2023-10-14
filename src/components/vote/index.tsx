import { useContext } from "react"

import s from "./vote.module.scss"

import { VoteContext } from "@/components/vote/vote-context"
import { VoteItem } from "@/components/vote/vote-item"

type Props = {
  postId: number
}

export const Vote = ({ postId }: Props) => {
  const { likes, handleLike } = useContext(VoteContext)

  const postLikes = (likes[postId] || []).slice(0, 2)

  return (
    <div className={s.likes}>
      {postLikes.map((item, index) => (
        <VoteItem
          key={index}
          variant={index === 0 ? "like" : "dislike"}
          like={item}
          handleLike={() => handleLike(postId, index)}
        />
      ))}
    </div>
  )
}
