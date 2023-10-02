import { Like } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { PostType } from "@/features/posts/posts-slice"

type Props = {
  post: PostType
}

export const Post = (props: Props) => {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png"
        alt=""
      />
      <div>
        <Button>
          <Like variant={"dislike"} flipped={true} />
        </Button>
        <Typography variant={"body2"}>5</Typography>
        <Button>
          <Like />
        </Button>
        <Typography variant={"body2"}>5</Typography>
        <Typography variant={"h2"}>{props.post.title}</Typography>
      </div>
      <div>
        <Typography variant={"body1"}>{props.post.body}</Typography>
      </div>
      <Button></Button>
    </>
  )
}
