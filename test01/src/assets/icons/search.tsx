import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#333"
      fillRule="evenodd"
      d="m14.31 12.9 3.4 3.39a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0l-3.39-3.4a8 8 0 1 1 1.41-1.41ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Search = memo(ForwardRef)
