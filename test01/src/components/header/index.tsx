import { ChangeEvent } from "react"

import s from "./header.module.scss"

import { TextField } from "@/components/ui/text-field"
import { Typography } from "@/components/ui/typography"

type Props = {
  searchQuery: string
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Header = ({ searchQuery, onSearchChange }: Props) => {
  return (
    <>
      <div className={s.title}>
        <Typography variant={"h1"}> Блог</Typography>
        <Typography variant={"body1"}>
          {" "}
          Здесь мы делимся интересными кейсами из наших проектов, пишем про IT,
          а также переводим зарубежные статьи
        </Typography>
      </div>
      <TextField
        value={searchQuery}
        onChange={onSearchChange}
        placeholder={"Поиск по названию статьи"}
        className={s.textField}
        type={"search"}
      />
    </>
  )
}
