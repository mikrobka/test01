import { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Like } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"
import { Typography } from "@/components/ui/typography"
import { PostsList } from "@/features/posts/posts-list"
import { fetchPosts } from "@/features/posts/posts-slice"

function App() {
  const [like, setLike] = useState(Math.random())
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts.posts)
  const postsStatus = useAppSelector((state) => state.posts.status)

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  console.log(posts)

  return (
    <div>
      <Like variant={"dislike"} flipped={true} />
      {/*<PostsList posts={posts} />*/}
    </div>
  )
}

export default App
