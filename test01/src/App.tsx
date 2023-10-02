import { TextField } from "@/components/ui/text-field"
import { Typography } from "@/components/ui/typography"

function App() {
  return (
    <div>
      <Typography variant={"h1"}>Blog</Typography>
      <TextField
        iconStart
        type={"search"}
        placeholder={"Поиск по названию статьи"}
      />
    </div>
  )
}

export default App
