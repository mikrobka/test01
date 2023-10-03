import s from "./posts-list.module.scss"

import { Post } from "@/features/posts/post"
import { PostType } from "@/features/posts/posts-slice"

type PostsListType = {
  posts: PostType[]
}

export const PostsList = ({ posts }: PostsListType) => {
  return (
    <div className={s.container}>
      {posts.map((post, index) => (
        <Post fullWidth={index === 0} key={post.id} post={post} />
      ))}
    </div>
  )
}
