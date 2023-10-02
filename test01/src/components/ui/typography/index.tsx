import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { clsx } from "clsx"

import s from "./typography.module.scss"

export interface TextProps<T extends ElementType> {
  as?: T
  variant?: "h1" | "h2" | "body1" | "body2"

  children?: ReactNode
  className?: string
}

export function Typography<T extends ElementType = "p">({
  as,
  className,
  variant = "body1",
  ...restProps
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const classNames = clsx(s.text, s[variant], className)
  const Component = as || "p"

  return <Component className={classNames} {...restProps} />
}
