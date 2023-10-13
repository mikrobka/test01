import { useState } from "react"

import s from "./vote.module.scss"

import { VoteItem } from "@/components/vote/vote-item"

export type LikeType = {
  count: number
  active: boolean
}

export const Vote = () => {
  const [like, setLike] = useState<Array<LikeType>>([
    { count: Math.floor(Math.random() * 50), active: false },
    { count: Math.floor(Math.random() * 50), active: false },
  ])

  const handleLike = (index: number) => {
    setLike((prevState) => {
      return prevState.map((item, i) => {
        if (i === index) {
          item.active = !item.active

          if (item.active && prevState[1 - i].active) {
            prevState[1 - i].active = false
            prevState[1 - i].count -= 1
          }

          item.count = item.active
            ? prevState[i].count + 1
            : prevState[i].count - 1
        }

        return item
      })
    })
  }

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
