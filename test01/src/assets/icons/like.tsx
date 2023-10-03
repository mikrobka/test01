import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"

interface LikeProps extends SVGProps<SVGSVGElement> {
  variant?: string
  flipped?: boolean
}

const SvgComponent = (props: LikeProps, ref: Ref<SVGSVGElement>) => {
  const { color = "default", flipped = false, ...rest } = props

  const rotate =
    // eslint-disable-next-line no-nested-ternary
    props.variant === "like"
      ? "M2.67 26.67h2.66c.74 0 1.34-.6 1.34-1.34v-12c0-.73-.6-1.33-1.34-1.33H2.67v14.67Zm26.44-9.5c.14-.33.22-.69.22-1.06v-1.44c0-1.47-1.2-2.67-2.66-2.67h-7.34l1.23-6.2c.07-.3.03-.61-.1-.88a6.4 6.4 0 0 0-1.18-1.63l-.61-.62-8.55 8.54c-.5.51-.79 1.19-.79 1.9v10.45c0 1.7 1.4 3.1 3.12 3.1h10.82c.93 0 1.81-.49 2.29-1.29l3.55-8.2Z"
      : "M2.67 5.17h2.66c.74 0 1.34-.6 1.34-1.34v12c0 .73-.6 1.33-1.34 1.33H2.67v-14.67Zm26.44 9.5c.14.33.22.69.22 1.06v1.44c0 1.47-1.2 2.67-2.66 2.67h-7.34l1.23 6.2c.07.3.03.61-.1.88a6.4 6.4 0 0 1-1.18 1.63l-.61.62-8.55-8.54c-.5-.51-.79-1.19-.79-1.9v-10.45c0-1.7 1.4-3.1 3.12-3.1h10.82c.93 0 1.81.49 2.29 1.29l3.55 8.2Z"

  // Определите стили в зависимости от переданных пропсов
  const styles = {
    fill:
      // eslint-disable-next-line no-nested-ternary
      props.variant === "dislike"
        ? "#EB5757"
        : props.variant === "like"
        ? "#219653"
        : "#3A35418A",
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      ref={ref}
      {...rest}
    >
      <path fill={styles.fill} d={rotate} style={styles} />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponent)

export const Like = memo(ForwardRef)
