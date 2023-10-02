import { Post } from "@/components/post/post"
import { PostType } from "@/features/posts/posts-slice"

type PostsListType = {
  posts: PostType[]
}

export const PostsList = ({ posts }: PostsListType) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post, index) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
