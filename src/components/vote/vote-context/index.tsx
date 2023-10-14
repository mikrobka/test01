import { createContext, ReactNode, useState, useMemo } from "react"

export type LikeType = {
  count: number
  active: boolean
}

type LikeDictionary = {
  [postId: number]: LikeType[]
}

type VoteContextType = {
  likes: LikeDictionary
  handleLike: (postId: number, index: number) => void
}

export const VoteContext = createContext<VoteContextType>({
  likes: {},
  handleLike: () => {},
})

type VoteProviderProps = {
  children: ReactNode
}

export const VoteProvider = ({ children }: VoteProviderProps) => {
  const initialLikesState: LikeDictionary = useMemo(() => {
    const generateLikesArray = () => {
      return Array.from({ length: 100 }, () => ({
        count: Math.floor(Math.random() * 50),
        active: false,
      }))
    }

    const likesState: LikeDictionary = {}

    for (let postId = 1; postId <= 100; postId++) {
      likesState[postId] = generateLikesArray()
    }

    return likesState
  }, [])

  const [likes, setLikes] = useState<LikeDictionary>(initialLikesState)

  const handleLike = (postId: number, index: number) => {
    setLikes((prevState) => {
      const updatedLikes = { ...prevState }
      const postLikes = [...updatedLikes[postId]]
      const item = postLikes[index]

      item.active = !item.active

      if (item.active && postLikes[1 - index].active) {
        postLikes[1 - index].active = false
        postLikes[1 - index].count -= 1
      }

      item.count = item.active ? item.count + 1 : item.count - 1
      updatedLikes[postId] = postLikes

      return updatedLikes
    })
  }

  return (
    <VoteContext.Provider value={{ likes, handleLike }}>
      {children}
    </VoteContext.Provider>
  )
}
