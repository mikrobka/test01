import { useContext, useState } from "react"

import s from "./vote.module.scss"

import { VoteContext } from "@/components/vote/vote-context"
import { VoteItem } from "@/components/vote/vote-item"

export type LikeType = {
  count: number
  active: boolean
}

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
