import { forwardRef } from "react"

import clsx from "clsx"

import s from "./button.module.scss"

export interface ButtonProps<T extends React.ElementType = "button"> {
  as?: T
  children?: React.ReactNode
  variant?: "primary" | "like"
  fullWidth?: boolean
  className?: string
  icon?: React.ReactNode
}

const ButtonRef = <T extends React.ElementType = "button">(
  props: ButtonProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: React.ForwardedRef<any>,
) => {
  const {
    as: Component = "button",
    variant = "primary",
    icon,
    fullWidth,
    className,
    ...otherProps
  } = props

  const classNames = {
    root: clsx(className, s[variant]),
  }

  return (
    <Component ref={ref} className={classNames.root} {...otherProps}>
      {props.children}
    </Component>
  )
}

export const Button = forwardRef(ButtonRef)
