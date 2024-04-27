export function Remove(props, { fill = "black" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill={fill} d="M5 13v-2h14v2z"></path>
    </svg>
  )
}
