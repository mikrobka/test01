import { createContext, ReactNode, useState } from "react"

export type LikeType = {
  count: number
  active: boolean
}

type VoteContextType = {
  like: LikeType[]
  handleLike: (index: number) => void
}

export const VoteContext = createContext<VoteContextType>({
  like: [],
  handleLike: () => {},
})

export const VoteProvider = ({ children }: any) => {
  const [like, setLike] = useState<LikeType[]>([
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
    <VoteContext.Provider value={{ like, handleLike }}>
      {children}
    </VoteContext.Provider>
  )
}
