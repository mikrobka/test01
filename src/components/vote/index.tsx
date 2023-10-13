import { useContext } from "react"

import s from "./vote.module.scss"

import { VoteContext, VoteProvider } from "@/components/vote/vote-context"
import { VoteItem } from "@/components/vote/vote-item"

export const Vote = () => {
  const { like, handleLike } = useContext(VoteContext)

  return (
    <div className={s.likes}>
      {like.map((item, index) => (
        <VoteItem
          key={index}
          variant={index === 0 ? "like" : "dislike"}
          like={item}
          handleLike={() => handleLike(index)}
        />
      ))}
    </div>
  )
}
