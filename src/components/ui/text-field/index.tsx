import { ReactNode, KeyboardEvent, FC, ComponentProps, useState } from "react"

import clsx from "clsx"

import s from "./text-field.module.scss"

import { Search } from "@/assets/icons"

export type TextFieldProps = {
  value?: string
  label?: string
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearValue?: () => void
  className?: string
} & ComponentProps<"input">

export const TextField: FC<TextFieldProps> = ({
  disabled,
  value,
  type,
  label,
  errorMessage,
  iconStart,
  iconEnd,
  onEnter,
  onKeyDown,
  onClearValue,
  className,
  ...rest
}) => {
  const showError = errorMessage && errorMessage.length > 0

  if (type === "search") {
    iconStart = <Search />
  }

  const classNames = {
    root: clsx(s.root, className),
    input: clsx(s.input, showError && s.error),
    iconStart: clsx(s.iconStart),
  }
  const showClearValueIcon =
    !iconEnd && !showError && onClearValue && value?.length! > 0
  const dataIconStart = iconStart ? "start" : ""
  const dataIconEnd = iconEnd || showClearValueIcon ? "end" : ""
  const dataIcon = dataIconStart + dataIconEnd

  return (
    <div className={classNames.root}>
      <div className={s.inputContainer}>
        {iconStart && <span className={s.iconStart}>{iconStart}</span>}
        <input
          value={value}
          disabled={disabled}
          data-icon={dataIcon}
          className={classNames.input}
          {...rest}
        />

        {iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
      </div>

      {showError && <div>{errorMessage}</div>}
    </div>
  )
}
