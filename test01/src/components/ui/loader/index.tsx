import s from "./loader.module.scss"

export const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.spinner}></div>
    </div>
  )
}
